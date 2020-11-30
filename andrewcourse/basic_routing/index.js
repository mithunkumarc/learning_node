const express = require('express');
const app = express();


function adminMiddleware(req, res, next) {
	console.log("admin middleware function");
	next(); // handover request, response obj to next request handler/ middleware 
}

function userMiddleware(req, res, next) {
	console.log("user middleware function");
	next(); //app.get('/user', ..) fired
}


// this middleware will get fired before app.get('/admin',..)
app.use('/admin', adminMiddleware);

// this middleware will get fired before app.get('/user',..)
app.use('/user', userMiddleware);

app.get('/admin', (req, res) => {
	res.send("<h3>admin page</h3>")
})

app.get('/user', (req, res) => {
	res.send("<h3>user page</h3>");
});



// function validateUser(req, res, next) {
// 	// get info from req object
// 	// authenticate from db
// 	// set response locals variable as validated
// 	res.locals.validated = true;
// 	console.log("validated ran!");
// 	next(); // allow req go back to next middleware/http method
// }


// function welcomeUser(req, res, next) {
// 	console.log("welcome ran!");
// 	next();
// }


// // this will run validate user on ALL path, all http methods
// app.use(validateUser, welcomeUser); // check node console, both callback will run as it is not path specific


// // before this request is handled, middleware will run because app.use is not path specific in this case
// app.get('/', (req, res) => {
// 	console.log("is validated : allpath :",res.locals.validated);
// 	res.send('<h3>main page</h3>');
// });


// // before this request is handled, middleware will run because app.use is not path specific in this case
// app.get('/demo', (req, res) => {
// 	console.log("is validated : demo : ",res.locals.validated);
// 	res.send('<h3>demo page</h3>');
// });

app.listen(3000);