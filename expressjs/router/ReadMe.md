
Use the express.Router class to create modular, mountable route handlers.  
A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.



example : bird and animal are like modules or mini app handles specific urls related to them

        
        bird.js   : bird.js handles all request related to /bird/xxx
        animal.js : animal.js handles all request related to /animal/xxx
        index.js  : main file/entry point, imports bird.js and animal.js

#### request methods and middleware usage

index.js

        request handle methods : 
        app.get()
        app.post()
        app.put()
        app.del()
        
        middleware:
        app.use()
        
bird.js : router module

        router.get()
        router.post()
        router.put()
        router.del()
        
        middleware:
        router.user()
