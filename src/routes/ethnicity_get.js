const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {basicGetSchema, getByIdSchema, getByNameSchema} = require('../functions/routes_get_schema');

basicGetSchema(router, connection, 'ethnicity','ethnicity');//Ruta GET para /ethnicities
getByIdSchema(router, connection, 'ethnicity','ethnicity')//Ruta GET para /ethnicities/:id
getByNameSchema(router, connection, 'ethnicity','ethnicity')//Ruta GET para /ethnicities/:name

module.exports = router;