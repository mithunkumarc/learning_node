#### index.js

      const userinfo = require('./userinfo');
      const express = require('express')
      const app = express()

      app.use('/user', userinfo);
      app.listen(3000);

#### userinfo.js

      var express = require('express');
      var router  = new express.Router();

      router.get("/register", async (req, res) => {
        console.log("user home page");
        // you could use await
        // const result = await getData();
        getData().then(
          (result) => res.send(result), // if success 
          error => res.send(error)      // if error
          )
      })

      function getData() { 
        return new Promise(function(resolve, reject) {
          // resolve("welcome to user home screen"); // for data/success
          reject("eno problem agide"); // for failure
          });
      }
      
localhost:3000/user/register
