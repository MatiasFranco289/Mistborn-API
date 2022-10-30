var express = require('express');
var router = express.Router();
const getAccesTokens = require('../functions/get_access_token');
const getUserById = require('../functions/get_user_by_id');
const connection = require('../functions/connect_db');
var access_token = '';

connection.connect((error) => {
  if(error) throw error;
  console.log('Successful connection to db.');
})

const lowLevelAuth = async function (req, res, next) { //Authorizacion de bajo nivel, solo verifica que el usuario este logeado
  access_token = access_token===''?await getAccesTokens():access_token;
  let {apiKey} = req.query;

  let userInfo = await getUserById(access_token, apiKey);
  if(!userInfo.hasOwnProperty('identities')) return res.status(401).send(`Unhautorized, the following error has ocurred: ${JSON.stringify(userInfo)}`);

  next()
}

router.get('/', lowLevelAuth, (req, res) => {
  let {limit, offset, order} = req.query;

  limit = !limit || isNaN(limit) || limit<0?6: limit;//Si limite no es valido entonce vale 6
  offset = !offset || isNaN(offset) || offset<0?0:offset;//Same
  order = order==='DESC'?'DESC':'ASC';//Si orden no valido entonces es ASC

  connection.query(`SELECT id, name FROM characters ORDER BY name ${order}
  LIMIT ${limit} OFFSET ${offset}`, (error, results) => {
    if(error){connection.end;throw error};

    res.status(200).send(results);
  })
})

router.get('/:id', lowLevelAuth, (req, res, next) => {
  let {id} = req.params;
  if(isNaN(id)) return next();//Si el id no es un numero me voy a la proxima ruta

  let {extensive} = req.query;
  extensive = extensive!=='true'?false:true;//Esto es asi para que no me inyecten sql

  let query = !extensive?`SELECT id, name, description, state FROM characters WHERE id=${id}`:
  `SELECT characters.id, characters.name, characters.description, characters.state,
  ethnicity.ethnicity, groups.group_name, abilities.ability FROM characters
  INNER JOIN characters_groups ON characters.id=characters_groups.id_character
  INNER JOIN groups ON characters_groups.id_group=groups.id
  INNER JOIN characters_abilities ON characters.id=characters_abilities.id_character
  INNER JOIN abilities ON characters_abilities.id_ability=abilities.id
  INNER JOIN ethnicity ON characters.id_ethnicity=ethnicity.id
  WHERE characters.id=${id}`;

  connection.query(query, (error, results) => {
    if(error){connection.end; throw error}
    if(results.length===0) return res.sendStatus(404);

    let abilities = {};
    let groups = {};

    if(extensive){
      results.forEach(result => {
        if(result.ability!='-') abilities[result.ability] = '';
        if(result.group_name!='-') groups[result.group_name] = '';
      })
  
      abilities = Object.keys(abilities);
      groups = Object.keys(groups);
  
      results[0].ability = abilities;
      results[0].group_name = groups;
    }

    res.send(results[0]);
  });
})

router.get('/:id', lowLevelAuth, (req, res, next) => {
  res.send('Soy search by name');
})
module.exports = router;''