var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const { requiresAuth } = require('express-openid-connect');
const axios = require('axios');
require('dotenv').config();


router.get('/',(req, res) => {
    try{
        let filePath = path.join(__dirname, '../views/index.html');//Ruta de la vista

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

router.get('/profile',requiresAuth(), (req, res) => {
    var options = {
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

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      
    res.send(JSON.stringify(req.oidc.user));
})

module.exports = router;