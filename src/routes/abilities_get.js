const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {basicGetSchema, getByIdSchema, getByNameSchema} = require('../functions/routes_get_schema');

basicGetSchema(router, connection, 'abilities','ability');//Ruta GET para /abilities
getByIdSchema(router, connection, 'abilities', 'ability');//Ruta GET para /abilities/:id
getByNameSchema(router, connection, 'abilities', 'ability')//Ruta GET para /abilities/:name

module.exports = router;