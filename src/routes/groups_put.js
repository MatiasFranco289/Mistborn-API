const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {putByIdSchema, putByNameSchema} = require('../functions/routes_put_schema');

putByIdSchema(router, connection, 'grupos', 'group_name');
putByNameSchema(router, connection, 'grupos','group_name');

module.exports = router;