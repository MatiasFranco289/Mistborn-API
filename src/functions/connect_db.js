const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

console.log(`db host ${process.env.DB_HOST}`);
console.log(`db name ${process.env.DB_NAME}`);
console.log(`db user ${process.env.DB_USER}`);
console.log(`db pas ${process.env.DB_PASSWORD}`);

connection.connect((error) => {
    if(error){
        throw error;
    }
    else{
        console.log('Successful connection to db.');
    }
})

module.exports = connection;