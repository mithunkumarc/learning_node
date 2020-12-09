#### middleware can be declared specifically for handling error and sending proper error response

        const express = require('express')
        const app = express()

        app.get("/", (req, res, next) => {
          // create error and pass to next funciton
          const err = new Error("something went wrong");
          next(err);
        })

        //.. other middlewares

        // middleware specific to handle error
        app.use((err, req, res, next) => {
          console.log(err.message);   // err.essage: something went wrong
          const errResponse = {
            "errMsg": err.message
          }
          res.status(500);
          res.send(errResponse);
        })

        app.listen(3000);
