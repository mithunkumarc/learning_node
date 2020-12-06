const bird = require('./bird');
const animal = require('./animal');

const express = require('express')
const app = express()

app.use('/bird', bird);
app.use('/animal', animal);

app.listen(3000);

/*
	index.js 
*/