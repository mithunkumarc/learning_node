/*
  index.js
  npx nodemon index.js
  
  steps to test:
  1. set session data
  localhost:3000/name/rahul
  set username as rahul

  2. read session data
  localhost:3000/home_page
  read username, it should return rahul
  
  3. delete session data
  localhost:3000/logout
  username will be cleared

  4. test again whether session data is deleted
  localhost:3000/home_page
  it should return "hello user"
*/

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser())

app.use(session({
	secret: "this is for encrypting data",
	resave: false,
	saveUninitialized: false
}));


// localhost:3000/name/rahul
// set username as rahul
app.get('/name/:username', (req, res) => {
	console.log(req.params.username);
	req.session['username'] = req.params.username;
	res.send(req.params);
})

// localhost:3000/home_page
// reading username
app.get("/home_page", (req, res) => {
	if(!req.session.username) {
		req.session.username = 'user';
	}
	username = req.session.username;
	res.send(`hello, ${req.session.username}`);
})

// destroy session
// localhost:3000/logout
app.get("/logout", (req, res) => {
	req.session.destroy((err) => {
		console.log("logged out");
	});
	res.send("logged out");
})

app.listen(3000);

