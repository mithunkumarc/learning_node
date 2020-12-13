/*
  index.js file
  npx nodemon index.js
  
  
  1. first save session data
  localhost:3000/name/rahul

  2. access saved session data
  localhost:3000/home_page

*/


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser())

/*
	resave:
	Forces the session to be saved back to the session store.
	As it create race condition, check documentation and use resave;
	race condtion express: where a client makes multiple parallel requests without a session

	saveUninitialized
	Forces a session that is "uninitialized" to be saved to the store. 
	A session is uninitialized when it is new but not modified. 
	Choosing false is useful for implementing login sessions, 
	reducing server storage usage, or complying with laws that require permission before setting a cookie. 
	Choosing false will also help with race conditions where a client makes multiple parallel requests 
	without a session.

	secret:
	This is the secret used to sign the session ID cookie. 
	This can be either a string for a single secret, or an array of multiple secrets. 
	If an array of secrets is provided, only the first element will be used to sign the session ID cookie, 
	while all the elements will be considered when verifying the signature in requests.
*/
app.use(session({
	secret: "this is for encrypting data",
	resave: false,
	saveUninitialized: false
}));


// localhost:3000/name/rahul
app.get('/name/:username', (req, res) => {
	console.log(req.params.username);
	req.session['username'] = req.params.username;
	res.send(req.params);
})

// localhost:3000/home_page
app.get("/home_page", (req, res) => {
	username = req.session.username || 'user';
	res.send(`hello, ${req.session.username}`);
})

app.listen(3000);
