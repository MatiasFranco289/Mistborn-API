require('dotenv').config();
var express = require('express');
var app = express();
const {auth} = require('express-openid-connect');
//Routes
const mainRoute = require('./src/routes/main.js');
const charactersGetRoute = require('./src/routes/characters_get.js');
const abilitiesGetRoute = require('./src/routes/abilities_get.js');
const abilitiesPutRoute = require('./src/routes/abilities_put.js');
const abilitiesDeleteRoute = require('./src/routes/abilities_delete.js');
const abilitiesPostRoute = require('./src/routes/abilities_post.js');
const ethnicityGetRoute = require('./src/routes/ethnicity_get.js');
const ethnicityPutRoute = require('./src/routes/ethnicity_put.js');
const ethnicityDeleteRoute = require('./src/routes/ethnicity_delete.js');
const ethnicityPostRoute = require('./src/routes/ethnicity_post.js');
const groupsGetRoute = require('./src/routes/groups_get.js');
const groupsPutRoute = require('./src/routes/groups_put.js');
const groupsDeleteRoute = require('./src/routes/groups_delete.js');
const groupsPostRoute = require('./src/routes/groups_post.js');

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

app.use('/characters', charactersGetRoute);

app.use('/abilities', abilitiesGetRoute);
app.use('/abilities', abilitiesPutRoute);
app.use('/abilities', abilitiesDeleteRoute);
app.use('/abilities', abilitiesPostRoute);

app.use('/ethnicities', ethnicityGetRoute);
app.use('/ethnicities', ethnicityPutRoute);
app.use('/ethnicities', ethnicityDeleteRoute);
app.use('/ethnicities', ethnicityPostRoute);

app.use('/groups', groupsGetRoute);
app.use('/groups', groupsPutRoute)
app.use('/groups', groupsDeleteRoute)
app.use('/groups', groupsPostRoute)

app.use(express.static(__dirname + '/src/views'));


//Server up
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT || 3000}`);
})
