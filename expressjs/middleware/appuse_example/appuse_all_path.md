
                // path : builtin module in nodejs
                const path = require('path');
                const express = require('express');

                const app = express();



                function validateUser(req, res, next) {
                        // get info from req object
                        // authenticate from db
                        // set response locals variable as validated
                        res.locals.validated = true;
                        console.log("validated ran!");
                        next(); // allow req go back to next middleware/http method
                }


                function welcomeUser(req, res, next) {
                        console.log("welcome ran!");
                        next();
                }


                // this will run validate user on ALL path, all http methods
                app.use(validateUser, welcomeUser); // check node console, both callback will run as it is not path specific


                // before this request is handled, middleware will run because app.use is not path specific in this case
                app.get('/', (req, res) => {
                        console.log("is validated : allpath :",res.locals.validated);
                        res.send('<h3>main page</h3>');
                });


                // before this request is handled, middleware will run because app.use is not path specific in this case
                app.get('/demo', (req, res) => {
                        console.log("is validated : demo : ",res.locals.validated);
                        res.send('<h3>demo page</h3>');
                });

                app.listen(3000);
        
        
output : 

        http://localhost:3000/
        validated ran!
        welcome ran!
        is validated : allpath : true

        http://localhost:3000/demo
        validated ran!
        welcome ran!
        is validated : demo :  true
