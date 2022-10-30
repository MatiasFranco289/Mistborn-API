var express = require('express');
var router = express.Router();
const getAccesTokens = require('../functions/get_access_token');
const getUserById = require('../functions/get_user_by_id');
const connection = require('../functions/connect_db');
var access_token = '';

const test = async function (req, res, next) {
  access_token = access_token===''?await getAccesTokens():access_token;
  let {apiKey} = req.query;

  let userInfo = await getUserById(access_token, apiKey);
  if(!userInfo.hasOwnProperty('identities')) return res.status(401).send(`Unhautorized, the following error has ocurred: ${JSON.stringify(userInfo)}`);

  next()
}

router.get('/', test, (req, res) => {
    res.send('Ruta get many characters');
})

router.get('/sazed', (req, res) => {
  connection.connect();

  connection.query("SELECT * FROM ethnicity", (error, results, fields) => {
    connection.end();
    if(error) throw error;

    results.forEach(result => {
      console.log(result);
    })
  })

  res.send('Ok!');
})

module.exports = router;