appuse : when path matches, corresponding middleware function callback is called.

        Mounts the specified middleware function or functions at the specified path: 
        the middleware function is executed when the base of the requested path matches path.


callback1('path', (req, res, next) => {
        //..
        next(); // next middleware function : callback2

})

callback2('path', (req, res, next) => {
        //..
        next(); // next middleware function if exists
})


app.use(path,callback1,callback2,...); // if you remove path, middle app.use will run for all path
