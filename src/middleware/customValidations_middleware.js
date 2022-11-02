const {lowLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');
const {param, query} = require('express-validator');

module.exports={
    basicGetValidation: [
        lowLevelAuth,
        query(['limit','offset']).optional().notEmpty().withMessage('Cannot be empty.').bail()
        .isInt().withMessage('Should be an integer').bail(),
        query('order').optional().notEmpty().withMessage('Cannot be empty').bail()
        .isIn(['ASC','DESC']).withMessage('The value was expected to be ASC or DESC.'),
        validateInputs
    ]
}