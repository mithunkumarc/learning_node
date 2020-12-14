/*
  Example: implemention own session store
  
  run node app: npx nodemon index.js
  
  "dependencies": {
    "connect-mongodb-session": "^2.4.1",
    "cookie-parser": "^1.4.5",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "nodemon": "^2.0.6"
  }
  
  steps to test this example:
  1.open chrome and mozilla
  
  check local mongodb : connect_mongodb_session_test/mySessions
  run : http://localhost:3000/
  sessions will be store in mongodb
  
  source : https://www.npmjs.com/package/connect-mongodb-session

*/


var express = require('express');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
 
var app = express();

// all the sessions will be store on mongodb 
var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
  collection: 'mySessions'
});
 
// Catch errors
store.on('error', function(error) {
  console.log(error);
});
 
app.use(require('express-session')({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  // Boilerplate options, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
  resave: true,
  saveUninitialized: true
}));


app.get('/', function(req, res) {
  res.send('Hello ' + JSON.stringify(req.session));
});
 
server = app.listen(3000);
