#### app use can be used like interceptors / request filters

> app.use mention list of calllback(middleware function to run) when specific path matches

appuse : when path matches, corresponding middleware function callback is called.

        Mounts the specified middleware function or functions at the specified path: 
        the middleware function is executed when the base of the requested path matches path.

example : 

        callback1('path', (req, res, next) => {
                //..
                next(); // next middleware function : callback2

        })

        callback2('path', (req, res, next) => {
                //..
                next(); // next middleware function if exists
        })


        app.use(path,callback1,callback2,...); // if you remove path, middle app.use will run for all path


next() : 

                important callback to allow to next middleware or request handler method.
                if you skip next() inside middleware/app.use req will not reach request handler so use may not get response
