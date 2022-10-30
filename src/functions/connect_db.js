const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    database:'mistborn',
    user:'root',
    password: ''
});

/* connection.connect((error) => {
    if(error){
        throw error;
    }
    else{
        console.log('Successful connection to db.');
    }
}) */

/* connection.end(); */
module.exports = connection;