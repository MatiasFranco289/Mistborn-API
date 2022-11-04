const {lowLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const {param, query, body} = require('express-validator');

module.exports={
    basicGetValidation: [
        lowLevelAuth,
        query(['limit','offset']).optional().notEmpty().withMessage('Cannot be empty.').bail()
        .isInt().withMessage('Should be an integer').bail(),
        query('order').optional().notEmpty().withMessage('Cannot be empty').bail()
        .isIn(['ASC','DESC']).withMessage('The value was expected to be ASC or DESC.'),
        validateInputs
    ],
    basicNameValidation: [
        param('name').isLength({max:40}).withMessage('Cannot have more than 40 characters').bail()
        .trim().escape(),
        validateInputs
    ],
    postBodyStringValidation: (field) => {
        return [
            body(field).exists().withMessage(`Expected to receive a ${field} parameter.`).bail()
            .notEmpty().withMessage('This field cannot be empty.').bail()
            .isString().withMessage('Should be an String').bail()
            .trim().escape()
        ]
    }
}