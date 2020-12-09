#### express router allows us to create mini app which handles specific paths like /user/xxx, /admin/xxx

#### middlewares declared in routers are specific to that router, syntax similar to app level middlware

### example: middlware declared in bird.js specific to bird.js not accessible outside. 

#### bird.js : handles bird specific url/path

        // a middleware function with no mount path. This code is executed for every request to the router
        // for path specifi : router.use("/path", (req, res, next) => {}) 
        router.use(function (req, res, next) {
          console.log('router Time from bird router:', Date.now())
          next()
        })

        router.get("/", (req, res) => {
          res.send("welcome to bird router");
        })


        module.exports = router


#### index.js

        const express = require('express')
        const app = express()
        const bird = require('./bird.js')


        // mount the router on the app
        app.use('/', bird)


        app.listen(3000);


        const express = require('express')
        const router = express.Router()
