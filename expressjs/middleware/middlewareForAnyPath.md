
        const path = require('path')
        const express = require('express')
        const app = express()

        // this middleware works for any path/url
        app.use((req, res, next) => {
          console.log("hello world");
        });

        app.listen(3000);

any url gets hello world  

        localhost:3000  
        localhost:3000/hello   
        localhost:3000/xxx/..
