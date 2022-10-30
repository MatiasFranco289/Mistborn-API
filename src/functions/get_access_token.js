const axios = require('axios');
require('dotenv').config();


const getAccesTokens = () => {
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

  let acessToken = axios.request(optionsToken).then(function (response) {
    return response.data.access_token;
  }).catch(function (error) {
    console.error(error);
  });

  return acessToken;
}

module.exports = getAccesTokens;