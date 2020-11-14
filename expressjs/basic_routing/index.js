const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log(req);
	res.send(`<h1>hello world</h1>`);
});

app.post('/', (req, res) => {
	res.send(`<h1>welcome to home post page</h1>`)
});

app.delete('/',(req, res)=>{

})
app.put('/',(req, res)=>{

})

app.listen(3000);
console.log("the server is listening on port 3000");