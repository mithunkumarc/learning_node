#### Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL.  
The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

example : 

      Route path: /users/:userId/books/:bookId
      Request URL: http://localhost:3000/users/34/books/8989
      req.params: { "userId": "34", "bookId": "8989" }

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.

        app.get('/users/:userId/books/:bookId', function (req, res) {
          res.send(req.params)
        })

another example : 

        Route path: /flights/:from-:to
        Request URL: http://localhost:3000/flights/LAX-SFO
        req.params: { "from": "LAX", "to": "SFO" }

        app.get('/flights/:from-:to', (req, res) => {
          res.send(req.params);// from and to req param variables
        })
