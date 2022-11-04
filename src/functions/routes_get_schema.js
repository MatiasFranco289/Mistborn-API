const {basicGetValidation, basicNameValidation} = require('../middleware/customValidations_middleware');
const {validationResult} = require('express-validator');
const {lowLevelAuth} = require('../middleware/auth_middlewares');

module.exports = {
    basicGetSchema: (router, connection, tablename, col) => {
        router.get(//Recibe limit, offset y order(opcionalmente).Devuelve un id y el parametro especificado en "col"
            '/', 
            basicGetValidation,
            (req, res) => {
            const {limit, offset, order} = req.query;

            connection.query(`SELECT id, ${col} FROM ${tablename} ORDER BY ${col} ${order || 'ASC'}
                LIMIT ${limit || '6'} OFFSET ${offset || '0'}`, (error, results) => {
                if(error) return res.sendStatus(500);
                if(results.length===0) return res.sendStatus(404);
            
                res.status(200).send(results);
            })
        })
    },
    getByIdSchema: (router, connection, tablename, col) => {
        router.get(
            '/:id',
            lowLevelAuth,
            (req, res, next) => {
            const {id} = req.params;
                
            if(isNaN(id)) return next();
          
            const errors = validationResult(req);
            if(!errors.isEmpty())return res.status(400).json({errors: errors.array() });
          
            connection.query(`SELECT id, ${col}, description FROM ${tablename} WHERE id=${id}`, (error, results) => {
                response(error, results, res);
            });
        })
    },
    getByNameSchema: (router, connection, tablename, col) => {
        router.get(
            '/:name',
            basicNameValidation,
            (req, res) => {
            const {name} = req.params;
    
            connection.query(`SELECT id, ${col}, description FROM ${tablename} WHERE ${col}="${name}"`, (error, results) => {
                response(error, results, res);
            });
        })
          
    }
}

function response(error, results, res){
    if(error) return res.sendStatus(500);
    if(results.length===0) return res.sendStatus(404);
            
    res.status(200).send(results[0]);
}