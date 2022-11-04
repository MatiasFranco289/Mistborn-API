const {basicNameValidation} = require('../middleware/customValidations_middleware');
const {highLevelAuth} = require('../middleware/auth_middlewares');
const validateInputs = require('../middleware/validateInputs_middleware');

module.exports = {
    deleteByIdSchema: (router, connection, tablename) => {
        router.delete(
            '/:id',
            highLevelAuth,
            validateInputs,
            (req, res, next) => {
                const {id} = req.params;
                if(isNaN(id)) return next();
                const query = `DELETE FROM ${tablename} WHERE id=${id}`;
                sendResult(res, query, connection);
            }
        )
    },
    deleteByNameSchema: (router, connection, tablename, colname) => {
        router.delete(
            '/:name',
            basicNameValidation,
            validateInputs,
            (req, res) => {
                const {name} = req.params;
                const query = `DELETE FROM ${tablename} WHERE ${colname}="${name}"`
                sendResult(res, query, connection);
            }
        )
    }
}

function sendResult(res, query, connection){
    connection.query(query, (error, results) => {
        if(error) return res.sendStatus(500);
        if(!results.affectedRows) return res.status(400).send(`0 Rows were affected.Check if your identifier is correct.`);
        res.sendStatus(200);
    })
}
