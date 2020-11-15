// path : builtin module in nodejs
const path = require('path');
const express = require('express');

const app = express();

//static files can be accessed from url, which exists in public folder
// http://localhost:3000/style.css
// http://localhost:3000/node.png
app.use(express.static('public'))


app.all('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/node.html'))
});

app.listen(3000);
console.log("the server is listening on port 3000");