const express = require('express');
const router = express.Router();
const validateInputs = require('../middleware/validateInputs_middleware');
const connection = require('../functions/connect_db');
const {highLevelAuth} = require('../middleware/auth_middlewares');
const {body} = require('express-validator');
const {basicNameValidation} = require('../middleware/customValidations_middleware');

router.put(
    '/:id',
    highLevelAuth,
    body('col').exists().withMessage('Expected to receive a col parameter.').bail()
    .isIn(["name","description","state","ethnicity","abilities","groups"]),
    body('value').exists().withMessage('Expected to receive a value parameter.')
    .custom(async (value, {req}) => {//Debo verificar que los datos que son enviados en value correspondan al tipo que se especifico en col
        let {col} = req.body;
        
        switch(col){
            case 'name':
            case 'description':
                if(typeof(value)!=='string') throw new Error(`${col} must be a string.`);
                if(!value.length) throw new Error(`${col} cannot be empty.`);
                return true;
            case 'state':
                if(["dead","alive","unknown"].indexOf(value)!== -1) return true;
                throw new Error(`${value} is not a valid value for ${col}. Valid values for state are 'dead','alive' or 'unknown'`);
            case 'ethnicity':
                if(isNaN(value)) throw new Error(`${value} is not a valid value for ethnicity. ethnicity must be an integer.`);
                await new Promise((resolve, reject) => {
                    connection.query(`SELECT EXISTS(SELECT id FROM ethnicity WHERE id=${value})`, (error, results) => {
                        if(error) reject('An unexpected error has ocurred.');
                        if(Object.values(results[0])[0]) resolve(true);
                        reject(`id ${value} does not correspond to an existing ethnicity.`);
                    })
                })
            break;
            case 'abilities':
            case 'groups':
                if(!Array.isArray(value)) throw new Error(`${value} is not a valid value for ${col}. ${col} must be an array.`);
                if(!value.length) return true;
                if(value.some(element => typeof(element)!== "number")) throw new Error('Every element of the array must be an integer.');
                if(value.some(element => {return value.indexOf(element) !== value.lastIndexOf(element)})) throw new Error('The array cannot have duplicates.');
                col = col==='groups'?'grupos':col;
                let query = '';
                value.forEach(id => query += `SELECT EXISTS(SELECT id FROM ${col} WHERE id=${id});`);

                await new Promise((resolve, reject) => {
                    connection.query(query, (error, results) => {
                        if(error) reject('An unexpected error has ocurred.');

                        let totalSum = results.length > 1?results.reduce((accumulator, object) => {
                            return accumulator + Object.values(object[0])[0]
                        },0):1;

                        if(totalSum != value.length) reject(`Some of the provided IDs do not correspond to existing ${col==='grupos'?'groups':col}.`);
                        resolve(true);
                    })
                })
            break;
        }
        return false;
    }),
    validateInputs,
    (req, res, next) => {
        const {id} = req.params;
        if(isNaN(id)) return next();
        modify(id , req.body, res);
    }
)

router.put(
    '/:name',
    basicNameValidation,
    validateInputs,
    (req, res) => {
        const {name} = req.params;

        connection.query(`SELECT id FROM characters WHERE name="${name}" LIMIT 1`,(error, results) => {
            if(error) return res.sendStatus(500);
            if(!results.length) return res.sendStatus(404);
            modify(results[0].id,req.body, res);
        })
    }
)

function modify(id, body, res){
    let {col, value} = body;
    col = col==="ethnicity"?"id_ethnicity":col;

    if(Array.isArray(value)){//Si col es un array tengo que primero eliminar las habilidades o grupos que el personaje tiene y despues insertar las nuevas
        //abilities, groups
        let tablename = 'characters_'+col;
        let query = `DELETE FROM ${tablename} WHERE id_character=${id}`;
        
        connection.query(query, (error, results) => {
            if(error) return res.sendStatus(500);
            //Una vez que borre sus habilidades o grupos ahora tengo que insertar los nuevos
            if(!value.length) return res.sendStatus(204);
            query = '';
            value.forEach(id_input => query += `INSERT INTO ${tablename} VALUES("${id}","${id_input}");`);

            connection.query(query, (error, results) => {
                if(error) return res.sendStatus(500);
                return res.sendStatus(204);
            })
        })
    }
    else{
        //Si col es name, description, state o ethnicity hago la consulta aca
        connection.query(`UPDATE characters SET ${col}="${value}" WHERE id=${id} LIMIT 1`, (error, results) => {
            if(error) return res.sendStatus(500);
            if(!results.changedRows) return res.status(404).send(
            "No one matches the provided id or name or maybe the field you are trying to update already have the same value.0 rows changed.");
            return res.sendStatus(204);
        })
    }
}


module.exports = router;''