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
            case 'abilities':
            case 'groups':
                if(!Array.isArray(value)) throw new Error(`${value} is not a valid value for ${col}. ${col} must be an array.`);
                if(value.some(element => isNaN(element))) throw new Error('Every element of the array must be an integer.');
                if(value.some(element => {return value.indexOf(element) !== value.lastIndexOf(element)})) throw new Error('The array cannot have duplicates.');
                col = col==='groups'?'grupos':col;
                let query = '';
                value.forEach(id => query += `SELECT EXISTS(SELECT id FROM ${col} WHERE id=${id});`);

                await new Promise((resolve, reject) => {
                    connection.query(query, (error, results) => {
                        if(error) reject('An unexpected error has ocurred.');

                        let totalSum = results.reduce((accumulator, object) => {
                            return accumulator + Object.values(object[0])[0]
                        },0);

                        if(totalSum != value.length) reject(`Some of the provided IDs do not correspond to existing ${col==='grupos'?'groups':col}.`);
                        resolve(true);
                    })
                })
        }
        return false;
    }),
    validateInputs,
    (req, res, next) => {
        const {id} = req.params;
        if(isNaN(id)) return next();
        modify(req.body, res);
    }
)

router.put(
    '/:name',
    basicNameValidation,
    validateInputs,
    (req, res) => {
        //Agarro el nombre
        //Creo una query para buscar su id
        //Repito la logica de la funcion de arriba
        const {name} = req.params;

        connection.query(`SELECT id FROM characters WHERE name="${name}" LIMIT 1`,(error, results) => {
            if(error) return res.sendStatus(500);
            if(!results.length) return res.sendStatus(404);
            modify(req.body, res);
        })
    }
)

function modify(body, res){
    const {col, name} = req.body;
    //Si col es name, description, state o ethnicity hago la consulta aca
    //Si col es un array tengo que primero eliminar las habilidades que el personaje tiene y despues insertar las nuevas
    res.status(200).send('Everything is okay!');
}


module.exports = router;''