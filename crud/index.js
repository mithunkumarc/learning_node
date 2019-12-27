const express = require('express');// npm i express
const bodyparser = require('body-parser');// npm i body-parser
const mongoose = require('mongoose'); //npm i mongoose

const app = express();

// parse requests
// If extended is false, you can not post "nested object"
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

// Enable CORS for all HTTP methods
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// configuring database
const config = require('./config.js');

//below code similar to 
/*
var func = require('./app/routes.js');
func(app);
*/
require('./product.routes.js')(app);


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// default route
app.get('/', (req, res) => {
	//mongoose.connect('mongodb://localhost:27017/test');
	res.json({"message": "welcome to zeptobook product app"});
});

app.listen(3000, () => {
	console.log("servers is listening on port 3000");
});