var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const { requiresAuth } = require('express-openid-connect');
const axios = require('axios');
require('dotenv').config();


router.get('/',(req, res) => {//Devuelve la vista principal de la pagina
    try{
        let filePath = path.join(__dirname, '../views/index.html');

        let result = fs.readFileSync(filePath,'utf8', (err, data) => {//Intento cargar la vista
            return data;
        })

        result = req.oidc.isAuthenticated()?result.replace('Login/Register', 'Profile'):result;//Si estas logeado replazo "login/register" por "Profile"

        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(result));
    }
    catch(err){
        res.status(404).send(`The following error has ocurred: ${err}`);
    }
})

router.get('/profile',requiresAuth(), async (req, res) => {
  //Obtengo un token que me da permisos para leer
  var optionsToken = {
    method: 'POST',
    url: `${process.env.ISSUER_BASE_URL}/oauth/token`,
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.SECRET,
      audience: process.env.API_AUDIENCE
    })
  };

  let acessToken = await axios.request(optionsToken).then(function (response) {
    return response.data.access_token;
  }).catch(function (error) {
    console.error(error);
  });

  try{
    //Obtengo la informacion actualizada del usuario, buscandolo por su mail
    var options = {
      method: 'GET',
      url: 'https://dev-f-hszyvk.us.auth0.com/api/v2/users',
      params: {q: `email:"${req.oidc.user.email}"`, search_engine: 'v3'},
      headers: {authorization: `Bearer ${acessToken}`}
    };

    let userInfo = await axios.request(options).then(function (response) {
      return response.data[0];
    }).catch(function (error) {
      console.error(error);
    });

    let filePath = path.join(__dirname, '../views/profile.html');

    let result = fs.readFileSync(filePath,'utf8', (err, data) => {//Cargo el HTML
        return data;
    })
    console.log(userInfo);

    result = result.replace('USERNAME', userInfo.nickname);
    result = result.replace('PROFILE_PHOTO', userInfo.picture);
    result = result.replace('API_KEY', userInfo.email_verified?userInfo.user_id:'Please check your mail and verify your account, then reload the page to receive your API KEY.');

    res.set('Content-Type', 'text/html');
    res.send(Buffer.from(result));
  }
  catch(err){
    res.status(404).send(`The following error has ocurred: ${err}`);
  }
})

module.exports = router;