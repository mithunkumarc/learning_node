this example shows if next callback is not called after middleware function is completed then response may not reach user


        const express = require('express');
        const app = express();

        app.use('/', (req, res, next) => {        // middleware functions is anonymous function here
          console.log("app use middleware");
          //next();                               // next is commeted so request will not reach app.get('/',())
        })

        app.get('/', (req, res) => {
          res.send("<h3>main page</h3>");
        });

        app.listen(3000);
