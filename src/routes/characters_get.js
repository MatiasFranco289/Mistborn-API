var express = require('express');
var router = express.Router();
const connection = require('../functions/connect_db');
const {param, query, validationResult} = require('express-validator');
const {lowLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const {basicGetSchema} = require('../functions/routes_get_schema');

const getFullCharQuery = `SELECT characters.id, characters.name, characters.description, characters.state,
ethnicity.ethnicity, grupos.group_name, abilities.ability FROM characters 
LEFT JOIN characters_groups ON characters.id=characters_groups.id_character
LEFT JOIN grupos ON characters_groups.id_group=grupos.id
LEFT JOIN characters_abilities ON characters.id=characters_abilities.id_character
LEFT JOIN abilities ON characters_abilities.id_ability=abilities.id
INNER JOIN ethnicity ON characters.id_ethnicity=ethnicity.id`;

function extendInfo(extensive, results){
    let abilities = {};
    let groups = {};

    if(extensive === 'true'){
      results.forEach(result => {
        if(result.ability) abilities[result.ability] = '';
        if(result.group_name) groups[result.group_name] = '';
      })
  
      abilities = Object.keys(abilities);
      groups = Object.keys(groups);
  
      results[0].ability = abilities;
      results[0].group_name = groups;
    }

    return results;
}

basicGetSchema(router, connection, 'characters','name');//Ruta GET para /characters
//Las rutas get de /character son unicas porque hacen un join de varias tab;as y reciben parametros extras, por eso no estan modularizadas como las demas
router.get(//Ruta get para buscar personaje por id, no es necesario validar el id porque si no es un numero se va a la siguiente ruta
  '/:id', 
  lowLevelAuth,
  query('extensive').optional().notEmpty().withMessage('Cannot be empty').bail()
  .isIn(['true','false']).withMessage('Should be either true or false'),
  (req, res, next) => {
  const {id} = req.params;
  const {extensive} = req.query;
  if(isNaN(id)) return next();//Si el id no es un numero me voy a la siguiente ruta

  const errors = validationResult(req);
  if(!errors.isEmpty())return res.status(400).json({errors: errors.array() });

  let query = extensive === 'true'?getFullCharQuery:`SELECT id, name, description, state FROM characters`;
  query += ` WHERE characters.id=${id}`;

  connection.query(query, (error, results) => {
    if(error) /* return res.sendStatus(500); */ console.log(res.sendStatus(500));
    if(results.length===0) return res.sendStatus(404);

    results = extendInfo(extensive, results);

    res.status(200).send(results[0]);
  });
})

router.get(//Ruta get para personaje por nombre, no es necesario validar api key ni extensive porque ya se valido arriba
  '/:name',
  param('name').isLength({max:40}).withMessage('Cannot have more than 40 characters').bail()
  .trim().escape(),
  validateInputs,
  (req, res) => {
    const {name} = req.params;
    const {extensive} = req.query;

    let query = extensive === 'true'?getFullCharQuery:`SELECT id, name, description, state FROM characters`;
    query += ` WHERE characters.name="${name}"`;

    connection.query(query, (error, results) => {
      if(error) return res.sendStatus(500);
      if(results.length===0) return res.sendStatus(404);
  
      results = extendInfo(extensive, results);
  
      res.status(200).send(results[0]);
    });
})
  

module.exports = router;