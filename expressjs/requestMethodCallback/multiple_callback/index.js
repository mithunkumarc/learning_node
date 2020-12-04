const express = require('express')
const app = express()

// localhost:3000/hello
// 1. way to use multiple callback
app.get("/hello",(req, res, next) => {
	console.log("hello");
	next(); // calls next callback and prints "world"
}, (req, res) => {
	console.log("world");
	res.send("hello world"); // end of respons here
});


// localhost:3000/demo
// 2. way, declare separate function and pass as arugment to request method
const callback1 = (req, res, next) => {
	console.log("callback1");
	next(); // calls callback2
}

const callback2 = (req, res, next) => {
	console.log("callback2");
	next();
}

const callback3 = (req, res) => {
	// no need of next here as callback3 is last
	console.log('callback3');
	res.send("callback3 is the end of the response here");
}


app.get("/demo", [callback1, callback2, callback3])


app.listen(3000);