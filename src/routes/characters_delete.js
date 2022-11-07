const express = require('express');
const router = express.Router();
const {highLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const connection = require('../functions/connect_db');
const {basicNameValidation} = require('../middleware/customValidations_middleware');

router.delete(
    '/:id',
    highLevelAuth,
    validateInputs,
    (req, res, next) => {
        const {id} = req.params;
        if(isNaN(id)) return next();
        deleteCharacter(id, res);
    }
)

router.delete(
    '/:name',
    basicNameValidation,
    (req, res) => {
        const {name} = req.params;

        connection.query(`SELECT id FROM characters WHERE name="${name}"`, (error, results) => {
            if(error) return res.sendStatus(500);
            if(!results.length) return res.status(400).send("No character found with that name.");
            const {id} = results[0];
            deleteCharacter(id, res);
        })
    }
)

function deleteCharacter(id, res){
    let query = `DELETE FROM characters_groups WHERE id_character=${id};`;
    query += `DELETE FROM characters_abilities WHERE id_character=${id};`;
    query += `DELETE FROM characters_characters WHERE (id_character1=${id} OR id_character2=${id});`;
    query += `DELETE FROM characters WHERE id=${id} LIMIT 1;`;
    
    connection.query(query, (error, results) => {
        if(error) return res.sendStatus(500);

        const totalRowsAffected = results.reduce((accumulator, object) => {
            return accumulator + object.affectedRows;
        }, 0);

        if(!totalRowsAffected) return res.status(400).send(`0 Rows were affected.Check if your identifier is correct.`);
        res.sendStatus(200);
    })
}

module.exports = router;