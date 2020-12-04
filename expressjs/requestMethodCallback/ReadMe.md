#### request methods in express same as in node

        get
        put 
        post
        del
        
#### callback function : 

        callbacks are functions used with request method to handle request and send response

        app.get("/", (req,res,next) => { 
        //.. 
        next();
        })

        arrow function above is the callback function which has access to request   

#### setup

        const express = require('express')
        const app = express()

#### request method with single callback

        // to handle get request, we need get request method
        // syntax : app.get(url, callback1, callbac2...)
        // below request method has only one callback, because there is no second callback, next arugment is not required
        app.get("/hello", (req, res) => {
          console.log("hello world");
        })


#### argument next required to pass request and response to next callback

        var cb0 = function (req, res, next) {
          console.log('CB0')
          next()  // passing req res to next callback cb1, if you skip calling next(). response ends here
        }

        var cb1 = function (req, res, next) {
          console.log('CB1')
          next()
        }

        app.get('/example', [cb0, cb1]) // cb0, cb1 list of callback executed in order
