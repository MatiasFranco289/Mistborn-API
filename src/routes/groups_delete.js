const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {deleteByIdSchema, deleteByNameSchema} = require('../functions/routes_delete_schema');

deleteByIdSchema(router, connection, 'grupos');
deleteByNameSchema(router, connection, 'grupos','group_name');

module.exports = router;