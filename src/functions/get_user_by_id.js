const axios = require('axios');

const getUserById = (access_token, userId) => {
    var options = {
        method: 'GET',
        url: `https://dev-f-hszyvk.us.auth0.com/api/v2/users/${userId}`,
        headers: {authorization: `Bearer ${access_token}`}
      };
      
      return axios.request(options).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return error.response.data;
      });
}

module.exports = getUserById;