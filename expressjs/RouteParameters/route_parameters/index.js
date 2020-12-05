const express = require('express')
const app = express()


app.get('/users/:userId/books/:bookId', (req, res) => {
	res.send(req.params)// params: field avaialble on request object
	// params field will capture all parameter values and assign to parameter name mentioned in URL
})


/*
	input : http://localhost:3000/users/32/books/kafka_on_the_shore
	output : {"userId":"32","bookId":"kafka_on_the_shore"}
*/

app.get('/flights/:from-:to', (req, res) => {
	res.send(req.params);// from and to req param variables
})

/*
	input : http://localhost:3000/flights/siddapura-mallapura
	output : {"from":"siddapura","to":"mallapura"}
*/


app.listen(3000);
