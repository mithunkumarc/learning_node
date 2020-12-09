Application level middleware


#### 1. with request method , simple middleware

      app.get("/path", (req, res) => {
        // this is also middlware , also called callback function
      })


#### 2. using app.use()

      app.use((req, res) => {
        // this is a middleware function, not a specific url middlware, executed for every request
      })
  

#### 3. path specific middleware
      
      // this middleware gets triggered only for path /hello
      app.use("/hello", (req, res, next) => {
        next(); //pass req to next callback or next request method
        // as there is no next callback, req goes to req method
      })

      app.get("/hello", (req, res) => {
        // res end here as we are not passing req to next callback or req method
      })

#### 4. use next() to pass req to immediate middlware function or next immediate req handling method callback 
 
        app.use("/hello", (req, res, next) => {
          next(); // pass req to next callback 
        }, (req, res) => {
          res.send("hello"); // next() pass control here
        }) 
 
 
#### 5 multiple middlwares can be declared for same path, execution of order depends on declartion order
 
        app.use("/hello", (req, res, next) => {
          console.log("one");
          next()
        })

        app.use("/hello", (req, res, next) => {
          console.log("two")
          next()
        })

        app.get("/hello", (req, res) => {
          console.log("Three");
          res.send("final");
        })
 
        //output :
        one
        two
        Three
        
#### 6. use next('route') skip rest of the current middleware stack , pass req to another request method.
 
 
        app.use("/hello", (req, res, next) => {
          console.log("one");
          next('route') // if you have used next(), req pass to next middleware callback stack
        }, (req, res) => {
                  res.send("next middlware callback stack"); // skipped
          })


        app.use("/hello", (req, res, next) => {
          console.log("two")	// after next('route') in the above middleware , req comes here
          next()
        })


        app.get("/hello", (req, res) => {
          console.log("Three");
          res.send("final");
        })
        
        //output
        one
        two
        Three
