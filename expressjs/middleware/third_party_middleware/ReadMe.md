
#### Use third-party middleware to add functionality to Express apps.

#### Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

#### The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser.

        $ npm install cookie-parser

        var express = require('express')
        var app = express()
        var cookieParser = require('cookie-parser')

        // load the cookie-parsing middleware
        app.use(cookieParser())

#### find list of third party middlewares

        https://expressjs.com/en/resources/middleware.html
