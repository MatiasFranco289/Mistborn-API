var express = require('express');
var router = express.Router();
const connection = require('../functions/connect_db');
const {check} = require('express-validator');
const {lowLevelAuth, highLevelAuth} = require('../functions/auth_middlewares');

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

router.get('/:id', lowLevelAuth,check('id').trim().escape(), (req, res) => {
  let {id} = req.params;
  let {extensive} = req.query;

  extensive = extensive!=='true'?false:true;//Esto es asi para que no me inyecten sql

  let query = !extensive?`SELECT id, name, description, state FROM characters WHERE id=${id}`:
  `SELECT characters.id, characters.name, characters.description, characters.state,
  ethnicity.ethnicity, grupos.group_name, abilities.ability FROM characters 
  LEFT JOIN characters_groups ON characters.id=characters_groups.id_character
  LEFT JOIN grupos ON characters_groups.id_group=grupos.id
  LEFT JOIN characters_abilities ON characters.id=characters_abilities.id_character
  LEFT JOIN abilities ON characters_abilities.id_ability=abilities.id
  INNER JOIN ethnicity ON characters.id_ethnicity=ethnicity.id
  WHERE ${isNaN(id)?`characters.name = ${id}`:`characters.id=${id}`}`;

  console.log("peticion:" + query);

  connection.query(query, (error, results) => {
    if(error){connection.end; throw error}
    if(results.length===0) return res.sendStatus(404);

    let abilities = {};
    let groups = {};

    if(extensive){
      results.forEach(result => {
        if(result.ability) abilities[result.ability] = '';
        if(result.group_name) groups[result.group_name] = '';
      })
  
      abilities = Object.keys(abilities);
      groups = Object.keys(groups);
  
      results[0].ability = abilities;
      results[0].group_name = groups;
    }

    res.send(results[0]);
  });
})

module.exports = router;''