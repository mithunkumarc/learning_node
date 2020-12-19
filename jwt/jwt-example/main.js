const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

// encryption key used for access token(also called jwt token)
// not a best practice, use standard practice
const accessTokenSecret = "somerandomaccesstoken";
// encryption key for refresh token
const refreshTokenSecret = "somerandomstringforrefreshtoken";

// use database
// for this example user data is hardcoded
const users = [
	{
		username: 'john',
		password: 'password123admin',
		role: 'admin'
	},
	{
		username: 'anna',
		password: 'password123member',
		role: 'member'
	}
]

// may be use database in realtime
let refreshTokens = [];

// req body parser
app.use(bodyParser.json());

// authentication and get access and refresh token
app.post('/login', (req, res) => {
	// read username and password from req body
	const { username, password } = req.body;		

	//  authenticate
	const user = users.find(u => {
		return u.username === username && u.password === password;
	})

	if(user) {
		// generate an access token
		const accessToken = jwt.sign({ username: user.username, role: user.role}, accessTokenSecret, { expiresIn: '2m'});
		const refreshToken = jwt.sign({ usernmae: user.username, role: user.role}, refreshTokenSecret);
		refreshTokens.push(refreshToken);

		res.json({
			accessToken,
			refreshToken
		})
	} else {
		res.send('username or password incorrect');
	}
})

// get new access token using refresh token
// client should send refresh token
app.post('/token', (req, res) => {
	const { token } = req.body;
	//has refresh token sent?
	if(!token) {
		// refresh token not sent
		return res.sendStatus(401);
	}

	// is refresh token valid(exist)?
	if(!refreshTokens.includes(token)) {
		return res.sendStatus(403);
	}

	jwt.verify(token, refreshTokenSecret, (err, user) => {		
		if(err) {
			console.log("jwt verify error : ", err);//todo : check error, if expired create new token
			return res.sendStatus(403);
		}

		// new access token created (on validation of refresh token)
		// maintain expiresIn consistant time, for this example expiresIn not consistent
		const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret, { expiresIn: '5m' });

		res.json({
			accessToken
		})
	})
})

// check jwt access token expired or not
app.post('/verify', (req, res) => {
	const { token } = req.body;

	jwt.verify(token, accessTokenSecret, (err, user) => {		
		if(err) {
			console.log("jwt verify error : ", err);//todo : check error, if expired create new token
			return res.sendStatus(403);
		}
		res.send("not expired");
	})
})


// logout: send refresh token, because it is main reason to get new access token
// access token destroy from client side
// write a middleware to check access token/validity
app.post('/logout', (req, res) => {
	const { token } = req.body; // receiving access token
	console.log(token);
	refreshTokens = refreshTokens.filter(t => t !== token); //removed refresh token from server side
	res.send("logged out");
})


app.listen(3000, () => {
	console.log("Server Port running : ", 3000);
})

