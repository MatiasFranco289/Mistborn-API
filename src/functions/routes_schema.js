const {basicGetValidation} = require('../middleware/customValidations_middleware');

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

                    res.status(200).send(results);
                })
        })
    }
}