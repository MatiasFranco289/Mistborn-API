const {validationResult} = require('express-validator');
const {highLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const {param, body} = require('express-validator');

module.exports = {
    putByIdSchema: (router, connection, tablename, colname) => {
        router.put(
            '/:id', 
            highLevelAuth,
            param('id').isInt().withMessage('Should be an Integer.').bail(),
            body('col').exists().withMessage('Expected to receive a col parameter.').bail()
            .isIn(['name','description']).withMessage('The value was expected to be description name or description.'),
            body('value').exists().withMessage('Expected to receive a value parameter.').bail()
            .isString().withMessage('Should be an String').bail()
            .notEmpty().withMessage('Cannot be empty').trim().escape(),
            validateInputs,
            (req, res) => {
                const {id} = req.params;
                let {col, value} = req.body;
                col = col==="name"?colname:col;

                const query = `UPDATE ${tablename} SET ${col}="${value}" WHERE id=${id}`
                connection.query(query, (error, results) => {
                    if(error) return res.sendStatus(500);
                    if(!results.affectedRows) return res.status(400).send(`0 Rows were affected. There is no ${colname} with id ${id}`);

                    res.sendStatus(200);
                })
        })
    }
}
