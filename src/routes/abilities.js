var express = require('express');
var router = express.Router();
const connection = require('../functions/connect_db');
const {highLevelAuth} = require('../middleware/auth_middlewares');
const {check} = require('express-validator');

router.post('/', highLevelAuth, check('ability').trim().escape(), check('description').trim().escape(), (req, res) => {
    let {ability, description} = req.body;

    if(!isNaN(ability) || !isNaN(description)) return res.status(400).send("Both, name and description cannot be a number or null.");

    connection.query(`INSERT INTO abilities(id, ability, description)
    VALUES('', '${ability}','${description}')`, (err, results) => {
        if(err) return res.status(409).send(err.sqlMessage);

        res.sendStatus(201);
    });

})

router.delete('/', highLevelAuth, check('id').trim().escape(), (req, res) => {
    const {id} = req.query;
    let query = `DELETE FROM abilities WHERE ${!isNaN(id)?`id=${id}`:`ability='${id}'`}`;

    connection.query(query, (err, result) => {
        if(err) return res.status(409).send(err.sqlMessage);

        res.status(200).send('Deleted Successfully.');
    });
})

module.exports = router;