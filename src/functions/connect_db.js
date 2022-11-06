const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 3306,
    multipleStatements: true
});

connection.connect((error) => {
    if(error){
        throw error;
    }
    else{
        console.log('Successful connection to db.');
    }
})

module.exports = connection;