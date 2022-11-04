const {basicNameValidation} = require('../middleware/customValidations_middleware');
const {highLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const {body} = require('express-validator');

module.exports = {
    putByIdSchema: (router, connection, tablename, colname) => {
        router.put(
            '/:id', 
            highLevelAuth,
            body('col').exists().withMessage('Expected to receive a col parameter.').bail()
            .isIn(['name','description']).withMessage('The value was expected to be description name or description.'),
            body('value').exists().withMessage('Expected to receive a value parameter.').bail()
            .isString().withMessage('Should be an String').bail()
            .notEmpty().withMessage('Cannot be empty').trim().escape(),
            validateInputs,
            (req, res, next) => {
                const {id} = req.params;
                if(isNaN(id)) return next();

                let {col, value} = req.body;
                col = col==="name"?colname:col;
                const query = `UPDATE ${tablename} SET ${col}="${value}" WHERE id=${id}`
                sendResponse(res, query, connection);
        })
    },
    putByNameSchema: (router, connection, tablename, colname) => {
        router.put(
            '/:name',
            basicNameValidation,
            validateInputs,
            (req, res) => {
                const {name} = req.params;
                let {col, value} = req.body;
                col = col==="name"?colname:col;
                const query = `UPDATE ${tablename} SET ${col}="${value}" WHERE ${colname}="${name}"`
                sendResponse(res, query, connection)
            }
        )
    }
}

function sendResponse(res, query, connection){
    connection.query(query, (error, results) => {
        if(error) return res.sendStatus(500);
        if(!results.affectedRows) return res.status(400).send(`0 Rows were affected.Check if your identifier is correct.`);
        res.sendStatus(200);
    })
}
