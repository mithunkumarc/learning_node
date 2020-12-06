const express = require('express')
const router = express.Router()

// middleware specific to bird.js
// not a path specific middleware
// triggers for all request path/url/route
router.use((req, res, next) => {
	console.log('bird module : ',Date.now());
	next();
})

// define home page route
router.get('/', (req, res) => {
	res.send("Bird home page");
})

// define the about route
router.get('/about', (req, res) => {
	res.send("about birds");
})

module.exports = router