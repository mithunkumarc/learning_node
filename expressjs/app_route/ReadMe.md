#### equavalent to normal request method, but app.route allows us to handle at one place(duplcates could be avoided)

                app.route('/book')
                  .get(function (req, res) {
                    res.send('Get a random book')
                  })
                  .post(function (req, res) {
                    res.send('Add a book')
                  })
                  .put(function (req, res) {
                    res.send('Update the book')
                  })

                //above equavalent to:
                
                app.get("/book",(req,res) => {});
                app.post("/book",(req,res) => {});
                app.put("/book",(req,res) => {});
                


helps in modularizing the application depending on routes/path.

for example : 

1. /book/xxx handled by one route mini app

        app.route('/book').get().post().put()..                 // chain of request methods
        
2. /users/xxx hanlded by another route minit app

        app.route('/users').get().post().put()..
        
You can create chainable route handlers for a route path by using app.route().  
Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos. 

Here is an example of chained route handlers that are defined by using app.route().

        const express = require('express')
        const app = express()

        app.route('/book')
          .get((req, res) => {
            console.log("get request method");
            res.send("get request method");
          })
          .post((req, res) => {
            console.log("post request method");
            res.send("post request method");
          })
          .put((req, res) => {
            console.log("post request method");
            res.send("put reuest method");
          })

        app.listen(3000);
        
Note : use post man        
