const express = require('express')
const path = require('path')
const app = express()

// dont expose(express export) user document like
// static file html/css etc
app.get('/statement', (req, res, next) => {
	
	//res.sendFile(): this will make browser to load/render file
	//to make browser to download use below
	// create bankdocuments folder and put a dummy file BankStatementChequing
	// downloading name johnsBankStatement
	res.download(path.join(__dirname,'bankdocuments/BankStatementChequing.png'),"johnsBankStatement.png", (err) => {
		// what if file doesn't exist/generated
		console.log("error occured : ",err);
	});
	console.log("headers kalsidya ", res.headersSent);
})


app.listen(3000);
