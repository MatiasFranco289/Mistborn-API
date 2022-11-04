const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {deleteByIdSchema, deleteByNameSchema} = require('../functions/routes_delete_schema');

deleteByIdSchema(router, connection, 'ethnicity');
deleteByNameSchema(router, connection, 'ethnicity','ethnicity');

module.exports = router;