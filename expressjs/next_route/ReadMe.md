middleware is a function which has access to req and res  

middleware used as callback function in request method. or app level middleware(app.use) or router level middleware(router.use())  

next('route') : used to stop executing current stack of middleware and send request to next middleware/request method callback

example  :

    const express = require('express')
    const app = express()

    app.get("/user/:userid", (req, res, next) => {
      if(req.params.userid == 0) {
        next('route') // pass request to next req.method/next middleware : zero response
      } else {
        next(); // next callback in the same middleware : non zero response
      }
    },(req, res) => {
      res.send("non zero response");
    })

    app.get("/user/:userid", (req, res) => {
      res.send("zero response")
    })

    app.listen(3000);
    
    
#### next() vs next('route') : 

      next() : request passed to next immediate callback of samemiddleware or next middleware request method
      next('route') : current middleware stack stops and request passed to next request method callback/middleware
