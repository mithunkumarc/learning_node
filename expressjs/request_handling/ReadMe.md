In fact, the routing methods can have more than one callback function as arguments.  
With multiple callback functions, it is important to provide next as an argument to the callback function   
and then call next() within the body of the function to hand off control to the next callback.


        // when request comes from url login first below get executed
        app.post('/login', (req,res,next) /* first callback */ => {
          // .. 
          next()// if you skip this, next callback will get triggered
        })


        app.post('/login', (req,res,next) /* second callback */ => {
          // .. if you wish pass to next callback with same path and same method
        })
