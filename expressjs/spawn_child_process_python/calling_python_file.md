#### hello.py

    import sys
    print("output from python")
    print("first argument : ", sys.argv[1])
    print("second argument : ", sys.argv[2])

#### index.js

    const userinfo = require('./userinfo');
    const express = require('express')
    const app = express()
    app.use('/user', userinfo);
    app.listen(3000);

#### userinfo.js

        var express = require('express');
        var router  = new express.Router();
        var spawn = require("child_process").spawn;

        // middleware
        // router.use('/register', function(req, res, next){
        //         return "hello world";
        // });

        router.get("/register", async (req, res) => {
          const process = spawn('python', ['./hello.py',
            req.query.firstname,  // parmeters
            req.query.secondname  // parmeters
          ]);
          // reading python console output
          process.stdout.on('data', function(data) {
            res.send(data.toString());
          });
        })

        module.exports = router



#### output

      http://localhost:3000/user/register?firstname=%22krunal%22&secondname=%22pandya%22
