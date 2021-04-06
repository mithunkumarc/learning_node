#### index.js

      const userinfo = require('./userinfo');
      const express = require('express')
      const app = express()

      app.use('/user', userinfo);

      app.listen(3000);

#### userinfo.js

      var express = require('express');
      var router  = new express.Router();

      const result = [];

      router.get("/register", async (req, res) => {
        console.log("user home page");
        getData();
        res.send(result);
      })

      function getData() {	
        const firstPromise = new Promise(function(resolve, reject) {
          result.push("first output");
          resolve("first");
        });
        const secondPromise = new Promise(function(resolve, reject) {
          result.push("second output");
          resolve("second");
        });
        //chaining promises
        return Promise.all([firstPromise,secondPromise]).then(v => {
          console.log("done", v); // collect info you want: v : ["first", "second"]
        })
      }
