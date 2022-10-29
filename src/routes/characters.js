var express = require('express');
var router = express.Router();

const test = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

router.get('/', test, (req, res) => {
    res.send('Ruta get many characters');
})


module.exports = router;