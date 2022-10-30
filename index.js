require('dotenv').config();
var express = require('express');
var app = express();
const {auth} = require('express-openid-connect');
//Routes
const mainRoute = require('./src/routes/main.js');
const charactersRoute = require('./src/routes/characters.js');

//CORS
app.use((req,res,next) => {
res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
})

//Auth
app.use(
    auth({
        authRequired: false,
        auth0Logout: true,
        issuerBaseURL: process.env.ISSUER_BASE_URL ,
        baseURL: process.env.BASE_URL,
        clientID: process.env.CLIENT_ID,
        secret: process.env.SECRET
    })
)

//Middlewares
app.use(express.json());
app.use('/', mainRoute);
app.use('/characters', charactersRoute);
app.use(express.static(__dirname + '/src/views'));


//Server up
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`);
})
