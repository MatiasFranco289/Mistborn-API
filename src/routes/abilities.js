var express = require('express');
var router = express.Router();
const connection = require('../functions/connect_db');
const {lowLevelAuth, highLevelAuth} = require('../functions/auth_middlewares');

router.get('/', lowLevelAuth, (req, res) => {
    res.send('Yo devuelvo habilidades');
})

//Una ruta que devuelva habilidades con limit offset y ordenadas
//Una ruta que permita crear una habilidad nueva
//Una ruta que te modificar una habilidad nueva
//Una ruta qu te permita eliminar una habilidad

//Una ruta que reciba un id o nombre y devuelva una habilidad
//Una ruta que devuelva todos los personajes que tienen una habilidad
module.exports = router;