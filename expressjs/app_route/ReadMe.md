You can create chainable route handlers for a route path by using app.route(). 
Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. 

Here is an example of chained route handlers that are defined by using app.route().

        const express = require('express')
        const app = express()

        app.route('/book')
          .get((req, res) => {
            console.log("get request method");
            res.send("get request method");
          })
          .post((req, res) => {
            console.log("post request method");
            res.send("post request method");
          })
          .put((req, res) => {
            console.log("post request method");
            res.send("put reuest method");
          })

        app.listen(3000);
        
Note : use post man        
