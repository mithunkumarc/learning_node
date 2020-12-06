const express = require('express')
const router = express.Router()

// animal.js specific middleware
// not a path specific middlware
// triggers for any req url/path/route
router.use((req, res, next) => {
	console.log("animal module : ", Date.now());
	next();// next callback/req method
})

// define home page
router.get("/",(req, res) => {
	console.log("animal home page");
	res.send("animal home page");
})

// define about animal page
router.get("/about", (req, res) => {
	console.log("about animal ");
	res.send("animal about page");	
})

module.exports = router