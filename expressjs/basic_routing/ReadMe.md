

middleware : 

#### middleware function : 

      function adminMiddleware(req, res, next) {
        console.log("admin middleware function");
        next(); // handover request, response obj to next request handler/ middleware ,
        //  if there is no next() response will end here
      }

#### binding middleware to a get request (url must be same)

      app.use('/admin', adminMiddleware);

#### get request handler

      app.get('/admin', (req, res) => {
        res.send("<h3>admin page</h3>")
      })
