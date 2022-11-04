const {postBodyStringValidation} = require('../middleware/customValidations_middleware');
const {highLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');

module.exports = {
    postSchema: (router, connection, tablename, colname) => {
        router.post(
            '/',
            highLevelAuth,
            postBodyStringValidation('name'),
            postBodyStringValidation('description'),
            validateInputs,
            (req, res) => {
                const {name, description} = req.body;
                //Primero verifico que no exista otro recurso con el mismo nombre.
                //Esto no deberia pasar porque la columna siempre deberia tener un constraint UNIQUE, pero como Railway a veces se bugea lo pongo por las dudas
                let query = `SELECT id FROM ${tablename} WHERE ${colname}="${name}"`;
                connection.query(query, (error, results) => {
                    if(error) return res.sendStatus(500);
                    if(results.length) return res.status(409).send("Another resource with the same name already exists.")
                    
                    query = `INSERT INTO ${tablename} VALUES("","${name}","${description}")`;
                    connection.query(query, (error, results) => {
                        if(error) return res.sendStatus(500);
                        res.sendStatus(201);
                    })
                })
            }
        )
    }
}

