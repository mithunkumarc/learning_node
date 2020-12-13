#### express-session helps to manage session
#### uses cookie parser


https://www.geeksforgeeks.org/session-management-using-express-session-module-in-node-js/

### options

####	resave:
	
  Forces the session to be saved back to the session store.
	As it create race condition, check documentation and use resave;
	race condtion express: where a client makes multiple parallel requests without a session

####	saveUninitialized
	
  Forces a session that is "uninitialized" to be saved to the store. 
	A session is uninitialized when it is new but not modified. 
	Choosing false is useful for implementing login sessions, 
	reducing server storage usage, or complying with laws that require permission before setting a cookie. 
	Choosing false will also help with race conditions where a client makes multiple parallel requests 
	without a session.

####	secret:
	
  This is the secret used to sign the session ID cookie. 
	This can be either a string for a single secret, or an array of multiple secrets. 
	If an array of secrets is provided, only the first element will be used to sign the session ID cookie, 
	while all the elements will be considered when verifying the signature in requests.
