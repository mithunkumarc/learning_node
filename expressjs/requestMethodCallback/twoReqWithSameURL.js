/*
  if two request method has same url, first one will get executed first
  read: https://github.com/mithunkumarc/learning_node/blob/master/expressjs/requestMethodCallback/twoReqWithSameURL.md
*/

const express = require('express')
const app = express()


app.get("/hello", (req, res, next) => {
	console.log("first"); // this will be printed first
	next(); // request will handover to next request method with same url
});

app.get("/hello", (req, res) => {
	console.log("second");  // this will be printed second
});

app.listen(3000);
