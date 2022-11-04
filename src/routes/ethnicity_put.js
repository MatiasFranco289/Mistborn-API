const express = require('express');
const router = express.Router();
const connection = require('../functions/connect_db');
const {putByIdSchema, putByNameSchema} = require('../functions/routes_put_schema');

putByIdSchema(router, connection, 'ethnicity', 'ethnicity');
putByNameSchema(router, connection, 'ethnicity','ethnicity');

module.exports = router;