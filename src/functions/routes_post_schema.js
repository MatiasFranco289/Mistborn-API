const {postBodyStringValidation} = require('../middleware/customValidations_middleware');
const {highLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const { body } = require('express-validator');

module.exports = {
    postSchema: (router, connection, tablename, colname) => {
        router.post(
            '/',
            highLevelAuth,
            postBodyStringValidation('name'),
            body('name').matches(/^[A-Za-z\s]+$/).withMessage('Must be alphabetic.'),
            postBodyStringValidation('description'),
            validateInputs,
            (req, res) => {
                const {name, description} = req.body;
                const query = `INSERT INTO ${tablename} VALUES("","${name}","${description}")`;
                    
                connection.query(query, (error, results) => {
                    if(error) return error.errno==1062?res.status(409).send(error.sqlMessage):res.sendStatus(500);
                    res.sendStatus(201);
                })
            }
        )
    }
}

