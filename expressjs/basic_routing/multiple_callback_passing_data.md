callback has optional first parameter before request, it is used to receive data from previous callback

        (data, req, res, next) => {}
        
        in the above callback, data parameter receive value from previous callback
        using next("some msg");
        data gets value "some msg"

#### example

        app.get("/demo", (req, res, next ) => {
          //first callback
          next("some message"); // pass data to next callback using next()
        }, (msg, req, res) => {
          //second callback
          res.send(msg);  // do whatever with msg, process it or send as response
        })
