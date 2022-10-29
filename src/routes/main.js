var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/',(req, res) => {
    try{
        let file = path.join(__dirname, '../views/index.html');
        fs.lstatSync(file).isDirectory();
        res.sendFile(file);
    }
    catch(err){
        res.status(404).send(`The following error has ocurred: ${err}`);
    }
    
})

module.exports = router;