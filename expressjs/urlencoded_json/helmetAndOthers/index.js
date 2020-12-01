const express = require('express');
const app = express();
const helmet = require('helmet')

app.use(helmet())

// builtin middlewares
// best practice to include these
app.use(express.static('public'));
app.use(express.json());
// if you comment below line req body params cannot be read
app.use(express.urlencoded({extended:false}));


/* 
	static
	json
	urlencoded
*/


// open ajax.html to send post request
// http://localhost:3000/ajax.html
app.post('/ajax', (req, res) => {
	// urlencoded important to make belo work
	// below line prints "name: "Rob"" if urlencoded middleware is used
	console.log(req.body);// urlencoded middleware reads req param
	// if you comment urlencoded middleware, parameters cannot be read from request
	res.json(["Test", 1,2,3,4])// return sample array
})


app.listen(3000);