const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {basicGetSchema, getByIdSchema, getByNameSchema} = require('../functions/routes_get_schema');

basicGetSchema(router, connection, 'grupos','group_name');//Ruta GET para /groups
getByIdSchema(router, connection, 'grupos','group_name')//Ruta GET para /groups/:id
getByNameSchema(router, connection, 'grupos','group_name')//Ruta GET para /groups/:name

module.exports = router;