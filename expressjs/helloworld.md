index.js

        const express= require('express')
        const app = express()
        const port = 3000

        app.get('/', (req, res) => {
          res.send('Hello node!')
        })

        app.listen(port, () => {
          console.log("server started on 3000 port");
        })


package.json

        {
          "name": "expdemo",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "",
          "license": "ISC",
          "dependencies": {
            "express": "^4.17.1",
            "nodemon": "^2.0.6"
          }
        }


output : 
        install express and nodemon dependencies
        in linux : npx nodemon index.js
        in windows : nodemon index.js
