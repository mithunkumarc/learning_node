JustExpress course link : https://github.com/robertbunch/justExpress


express offers main two things 

1. router : handle http methods

2. middleware : validate user/ store data to db

        req --- middleware - res
        middleware : a function which has access to request, response and next 

#### project 

        app level : index.js : example : to handle request , use :  app.get()
        module 1 : bird.js (created using express router) router level : example : handle req : router.get()
        module 2 : animal.js (created using express router) router level : hadle req using : router.get()

#### structure of express , order is important:

        imports/require

        middlewares/builtin/user defined

        http methods/get post put del

        listen server/ start server under port

#### best practice to include middleware



        const express = require('express');
        const app = express();
        const helmet = require('helmet');       // security
        app.use(helmet());                      // security
        app.use(express.urlencoded());          // parse req body
        app.use(express.json());                // req or response obj to json
        app.use(express.static('public'));      // makes html, css other static files accessible(inside public folder)


#### https://expressjs.com/en/api.html  : find all api methods/state

#### request methods

        app.get(url,[callback1, callback2...] : 
        each callback has req,res,next arguments
        where next is a function which call next callback, for example : callback1 next() will call callback2
        

#### todo


        types of middlware : https://expressjs.com/en/guide/using-middleware.html  
        express generator
        
