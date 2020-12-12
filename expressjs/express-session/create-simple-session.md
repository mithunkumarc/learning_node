creating simple session

        const express = require('express');
        const app = express();
        // express session uses cookie parser
        const cookieParser = require('cookie-parser');
        const session = require('express-session');

        app.use(cookieParser())
        app.use(session({
          secret: "this is for encrypting data" // this key used to encryp session data
        }));


        app.get('/', (req, res) => {
          req.session.page_views++; // adding new variable to session object, you may expect NaN beginning but will increment later
          res.send(`the count is ${req.session.page_views}`);
        })

        app.listen(3000);
        
test this app in two browser(acts as two different client/user), refresh to see count getting increased.        
