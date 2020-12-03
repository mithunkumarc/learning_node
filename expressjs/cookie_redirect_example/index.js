const path = require('path')
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())



// this middleware works for any path/url
app.use((req, res, next) => {
	console.log("hello world");
	next();//important , else response end here
});


app.get('/login', (req, res, next) => {
	const msg = req.query.msg;
	if(msg === 'fail') {
		//run some other funciton
	}
	console.log("send login page");
	//res.render('login'); use template engine provide login page
})

app.post('/process_login', (req, res, next) => {
	// req.body need urlencoded and json middleware
	const username = req.body.username;
	const password = req.body.password;
	// check db for credentials
	// if valid, save username in cookie
	// send welcome 
	if(password === "x") {
		res.cookie("username", username);
		res.redirect('/welcome');
	} else {
		res.redirect('/login?msg=fail');
	}
});


app.get('/welcome', (req, res, next) =>{
	res.send({username: req.cookies.username});
})



app.listen(3000);