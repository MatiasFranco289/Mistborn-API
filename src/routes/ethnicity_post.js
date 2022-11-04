const express = require('express');
const router = express.Router();
const {postSchema} = require('../functions/routes_post_schema');
const connection = require('../functions/connect_db');

postSchema(router, connection, 'ethnicity','ethnicity');

module.exports = router;