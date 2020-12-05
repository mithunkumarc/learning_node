
app.param([name], callback)

Add callback triggers to route parameters, where name is the name of the parameter or an array of them, and callback is the callback function.
app.param callback called only once even 


if request method handling req url with parameters, before request method gets executed, app.param gives opportunity to run a callback.



#### 1. app.param triggers first before request method with registered parameter

        // id is the parameter name
        // any request method(with id param) before request is handled, this method gets executed first  
        app.param('id', function (req, res, next) {
          console.log('executed first')
          next(); // important: control goes to request method or next callback , if you skip this , response will end here
        })

        // before this method gets executed, there is param mehtod registered with id param. 
        // so its callback gets executed first.
        app.get('/user/:id', (req, res) => {
          console.log('executed last');
        });


#### 2. app.param executed only once, even if the parameter is matched in multiple routes(multiple request method),

        // called first, executed only once even though there are two request method with same route/url/path
        app.param('id', function (req, res, next) {
          console.log('called only once')
          next();
        })

        // this req mehtod handled first
        app.get('/user/:id', (req, res, next) => {
          console.log('first match');
          next();
        });

        // this handled second
        app.get('/user/:id', (req, res) => {
          console.log("second mathch");
          res.send("response end here");
        })


#### 3. multiple parameter example : app.param([multiple_parameter_names], callback1, callback2...) 

        // two parameters, id and name, param method triggers twice , once for id and once for name
        // even though two request mehtod url/route matches, param gets executed only once per parameter
        app.param(['id', 'name'], function (req, res, next, value) {
          console.log('app parameter', value);
          next(); // to either next callback or next request method, 
          // in this case there is not next callback so to next req method
        })

        app.get('/user/:id/:name', (req, res, next) => {
          console.log('first match');
          next();
        });

        app.get('/user/:id/:name', (req, res) => {
          console.log("second match");
          res.send("response end here");
        })
        
#### 4. multiple req methods with same parameter

        // user and admin path share same parameter id
        // http://localhost:3000/admin/34, http://localhost:3000/user/34
        // above both url triggers this 
        app.param('id', (req, res, next, value) => {
                console.log("id param : ",value);
                next(); // next request mehtod depends of path admin or user
        })

        app.get("/user/:id", (req, res) => {
                console.log("user id");
        })

        app.get("/admin/:id", (req, res) => {
                console.log('admin id');
        })
