### if app.use('path',middlewarecallback1, ..), then before request method gets handled app.use middlewares gets called

        const express = require('express');
        const app = express();


        function adminMiddleware(req, res, next) {
          console.log("admin middleware function");
          next(); // handover request, response obj to next request handler/ middleware 
        }

        function userMiddleware(req, res, next) {
          console.log("user middleware function");
          next(); //app.get('/user', ..) fired
        }


        // this middleware will get fired before app.get('/admin',..)
        app.use('/admin', adminMiddleware);

        // this middleware will get fired before app.get('/user',..)
        app.use('/user', userMiddleware);

        app.get('/admin', (req, res) => {
          res.send("<h3>admin page</h3>")
        })

        app.get('/user', (req, res) => {
          res.send("<h3>user page</h3>");
        });


        app.listen(3000);
        
        
output : 

http://localhost:3000/admin

        admin middleware function

http://localhost:3000/user

        user middleware function
