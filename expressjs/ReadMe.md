JustExpress course link : https://github.com/robertbunch/justExpress


express offers main two things 

1. router : handle http methods

2. middleware : validate user/ store data to db

        req --- middleware - res
        middleware : a function which has access to request, response and next 


#### structure of express , order is important:

        imports/require

        middlewares/builtin/user defined

        http methods/get post put del

        listen server/ start server under port


#### https://expressjs.com/en/api.html  : find all api methods/state



#### todo

        use of next
        app.param()
