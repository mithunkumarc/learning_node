
Documentation : important :   

https://expressjs.com/en/guide/writing-middleware.html  
https://expressjs.com/en/guide/using-middleware.html  

####  Middleware functions can perform the following tasks:

1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware function in the stack.

#### Middleware must pass request to next middleware/request method

    If the current middleware function does not end the request-response cycle, 
    it must call next() to pass control to the next middleware function. 
    Otherwise, the request will be left hanging.
    
#### Express can use following types of middlware

1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware
    
