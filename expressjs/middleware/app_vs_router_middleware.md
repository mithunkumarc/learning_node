router.get is only for defining subpaths. Consider this example:

        var router = express.Router();

        app.use('/first', router); // Mount the router as middleware at path /first

        router.get('/sud', smaller);

        router.get('/user', bigger);

If you open /first/sud, then the smaller function will get called.  
If you open /first/user, then the bigger function will get called.  
In short, app.use('/first', router) mounts the middleware at path /first, then router.get sets the subpath accordingly.  
router must register/mount to app. router is lime mini app under root express app. path is like : "/appurl/routerurl"


But if we instead use the following:   

        app.use('/first', fun);

        app.get('/sud', bigger);

        app.get('/user', smaller);
        
If you open /first in your browser, fun will get called,  
For /sud, bigger will get called  
For /user, smaller will get called  
But remember for /first/sud, no function will get called  
