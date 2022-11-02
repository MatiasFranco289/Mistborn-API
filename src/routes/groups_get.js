const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {basicGetSchema} = require('../functions/routes_schema');

basicGetSchema(router, connection, 'grupos','group_name');//Ruta GET para /characters

module.exports = router;