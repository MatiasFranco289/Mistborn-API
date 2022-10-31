var express = require('express');
var router = express.Router();
const connection = require('../functions/connect_db');
const {lowLevelAuth, highLevelAuth} = require('../functions/auth_middlewares');
const {check} = require('express-validator');

router.get('/', lowLevelAuth, (req, res) => {
    let {limit, offset, order} = req.query;

    limit = !limit || isNaN(limit) || limit<0?6: limit;
    offset = !offset || isNaN(offset) || offset<0?0:offset;
    order = order==='DESC'?'DESC':'ASC';

    connection.query(`SELECT * FROM abilities ORDER BY ability ${order}
    LIMIT ${limit} OFFSET ${offset}`, (error, results) => {
        if(error){connection.end;throw error};
    
        res.status(200).send(results);
    })
})

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

router.put('/', highLevelAuth,
check('id').trim().escape(), 
check('col').trim().escape(), 
check('value').trim().escape(),
(req, res) => {
    const {id, col, value} = req.query;
    let query = `UPDATE abilities SET ${col} = '${value}' WHERE ${!isNaN(id)?`id=${id}`:`ability='${id}'`}`;
    connection.query(query, (err, result) => {
        if(err) return res.status(409).send(err.sqlMessage);

        res.status(200).send('Resource updated successfully.');
    })
})
module.exports = router;