
Use the express.Router class to create modular, mountable route handlers.  
A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.



example : 

        index.js  : main file/entry point, imports bird.js and animal.js
        bird.js   : bird.js handles all request related to /bird/xxx
        animal.js : animal.js handles all request related to /animal/xxx
