require('dotenv').config();
const {PORT} = process.env;
var express = require('express');
var app = express();
//Routes
const charactersRoute = require('./src/routes/characters.js');

//CORS
app.use((req,res,next) => {
res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

//Middlewares
app.use(express.json());
app.use('/characters', charactersRoute);
//Server up
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})