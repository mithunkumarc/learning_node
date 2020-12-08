#### Order wins

#### first one will get executed , in case of two req method has same url

        app.get("/hello", (req, res) => {
          console.log("one");
        })

        app.get("/hello", (req, res) => {
          console.log("two");
        })


#### first req method can pass req to second req method by calling next(), from callback function

      app.get("/hello", (req, res, next) => {
        console.log("one");
        next();
      })

      app.get("/hello", (req, res) => {
        console.log("two");
      })

      // output : 
      one
      two
