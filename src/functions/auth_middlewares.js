const getAccesTokens = require('./get_access_token');
const getUserById = require('./get_user_by_id');
var access_token = '';

module.exports = {
    lowLevelAuth : async function (req, res, next) { //Authorizacion de bajo nivel, solo verifica que el usuario este logeado
        access_token = access_token===''?await getAccesTokens():access_token;
        let {apiKey} = req.query;
        let userInfo = await getUserById(access_token, apiKey);
        if(!userInfo.hasOwnProperty('identities')) return res.status(401).send(`Unhautorized, your access token appears to be incorrect.`);
        next()
    },
    highLevelAuth:async function(req, res, next){//Authorizacion de nivel alto, el usuario debe estar logeado y tener un rango de admin
        access_token = access_token===''?await getAccesTokens():access_token;
        let {apiKey} = req.query;
        let userInfo = await getUserById(access_token, apiKey);
        
        if(!userInfo.hasOwnProperty('app_metadata') || userInfo.app_metadata.permissions!=='admin'){
          return res.status(403).send(`You do not have sufficient permissions to access this route, contact the administrator if you want to obtain a high-level api key.`);
        }
      
        next();
    }
}

  
