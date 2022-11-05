const express = require('express');
const router = express.Router();
const {highLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const connection = require('../functions/connect_db');
const {body} = require('express-validator');
const {postBodyStringValidation} = require('../middleware/customValidations_middleware');
const customArrVal = (fieldName, tablename) => {
    return [
        body(fieldName).optional().isArray().withMessage('Should be an Array.').bail()
        .isLength({min:1}).withMessage('Cannot be empty.').custom((value) => customArrayIdCheck(value, tablename))
    ]
}

router.post(
    '/',
    highLevelAuth,
    postBodyStringValidation('name'),
    postBodyStringValidation('description'),
    body('state').exists().withMessage('Expected to receive a state parameter.').bail()
    .isIn(['alive','dead','unknown']).withMessage('Valid values for this field are "alive", "dead" or "unknown"').bail(),
    body('id_ethnicity').exists().withMessage('Expected to receive a id_ethnicity parameter.').bail()
    .isInt().withMessage('Should be an Integer').custom(async value => {
        const query = `SELECT EXISTS(SELECT id FROM grupos WHERE id=${value})`
        const result = await new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if(error) reject('An unexpected error has ocurred.');
                resolve(Object.values(results[0])[0]);
            })
        })
        if(result) return true;
        throw new Error(`The ethnicity with id ${value} does not exist.`);
    }),
    customArrVal('id_abilities','abilities'),
    customArrVal('id_groups','grupos'),
    customArrVal('id_relations','characters'),
    validateInputs,
    (req, res) => {
    const {name, description, state, id_ethnicity} = req.body;
    const extraParams = {'characters_abilities':req.body.id_abilities,'characters_groups':req.body.id_groups,'characters_characters':req.body.id_relations};
    const query = `INSERT INTO characters VALUES("","${name}","${description}","${state}","${id_ethnicity}")`
    //Es necesario crear el personaje antes que las relaciones para obtener el id
    connection.query(query, async (error, results) => {
        if(error) return error.errno==1062?res.status(409).send(error.sqlMessage):res.sendStatus(500);

        const newCharacterId = results.insertId;
        let extraQuerys = [];

        Object.values(extraParams).forEach((value, index) => {
            if(!value) return;

            let tablename = Object.keys(extraParams)[index]
            value.forEach(id => {
                extraQuerys.push(new Promise((resolve, reject) => {
                    connection.query(`INSERT INTO ${tablename} VALUES("${newCharacterId}","${id}")`, (error, results) => {
                        if(error) reject('An unexpected error occurred during relationship creation.');
                        resolve(true);
                    })
                }));
            })
        })

        let relationsResult = await Promise.all(extraQuerys);

        if(relationsResult.every(element => !!element)) return res.sendStatus(201);
        return res.status(202).send("Character created but some errors occurred during relationship building.");
    })
})

//Esto chequea que el pasado sea solo de enteros y que las ids contenidas en el correspondan a un campo existente dentro de una tabla
async function customArrayIdCheck(value, tablename){
    if (!value.every(Number.isInteger)) throw new Error('Can only contain numbers.');
    if(value.length !== new Set(value).size) throw new Error('Cannot contain repeated values.')

    const queryArrays = value.map(id => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT EXISTS(SELECT id FROM ${tablename} WHERE id=${id})`, (error, results) => {
                if(error) reject('An unexpected error has ocurred.');
                resolve(Object.values(results[0])[0]);
            })
        })
    })

    const queryResults = await Promise.all(queryArrays);
    if(queryResults.every(element => !!element)) return true; 

    let falseIds = [];
    queryResults.forEach((queryResult, index) => {if(!queryResult) falseIds.push(index)})

    throw new Error('The following identifiers do not exist: ' + falseIds.map(element => {return value[element]}));
}

module.exports = router;