/*
  npx nodemon index.js
  
  this example includes how to use session store methods
  
  steps to test example
  1. open localhost:3000 in chrome and mozilla
  creates two session, check in mongodb gui/conosole
  
  2. read number of sessions : example for : store.all()
  localhost:3000/count_sessions
  
  
  explore session store methods : 
  
  1. store.destroy(sid, callback)

  This required method is used to destroy/delete a session from the store given a session ID (sid). 
  The callback should be called as callback(error) once the session is destroyed.

  2. store.clear(callback)

  This optional method is used to delete all sessions from the store. 
  The callback should be called as callback(error) once the store is cleared.

  3. store.length(callback)

  This optional method is used to get the count of all sessions in the store. 
  The callback should be called as callback(error, len).

  4. store.get(sid, callback)

  This required method is used to get a session from the store given a session ID (sid). 
  The callback should be called as callback(error, session).
    The session argument should be a session if found, otherwise null or undefined 
    if the session was not found (and there was no error). 
    A special case is made when error.code === 'ENOENT' to act like callback(null, null).


    5. store.set(sid, session, callback)
    Required

    This required method is used to upsert a session into the store given a session ID (sid) and session (session) object. 
    The callback should be called as callback(error) once the session has been set in the store.

*/

var express = require('express');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
 
var app = express();
var store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
  collection: 'mySessions'
});
 
// Catch errors
store.on('error', function(error) {
  console.log(error);
});

// session will be created for any request: not a path specific middleware 
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

// localhost:3000/count_sessions : use other methods like this (get, set, clear , destroy, length)
app.get('/count_sessions', (req, res) => {
	store.all((err, sessions) => {
		console.log('number of sessions : ',sessions.length);
	})
})
 
server = app.listen(3000);
