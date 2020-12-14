/*
session data are store in cookie cookie
when session cookie is expired, session data also lost
cookie maxAge takes in milliseconds

steps to test this example

1. create session and set maxAge for session cookie to 20 seconds
    localhost:3000/
    count is set to zero
    
2. check session data count is accessible and gets updated
    localhost:3000/count
    for every request, count value is updated
    
3. if you leave a gap of 20 seconds without sending any request(inactivity)
   localhost:3000/count
   session cookie gets expired, session data is lost
    

*/


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser())

app.use(session({
	secret: "this is for encrypting data",
	resave: false,
	saveUninitialized: false
}));


// localhost:3000/
app.get('/', (req, res) => {
	req.session['count'] = 0;
	req.session.cookie.maxAge = 20000;
	res.send({"count": req.session['count']});
})

// count gets incremented only when requested within 20 seconds
// after 20 seconds cookie maxage is expired. so last value os count cannot be retrived
app.get('/count', (req, res) => {
	req.session.count++;
	if(req.session.count) { // when cookie expires, count value becomes null(because cookie parase as string)
		res.send({"count": req.session.count});	
	} else {
		res.send("session cookie expired, please recreate");
	}
	
})


app.listen(3000);
