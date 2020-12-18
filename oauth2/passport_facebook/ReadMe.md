1. create your local app : lets say My App
2. Register your app with facebook, (your app URL to access Facebook api) http://localhost:3000/auth/facebook/callback
3. fb developers > create app > Build people experiences > give app name > create
4. pop appears showing app id and app secret key. 
5. go to bottom click add platform > select website > http://localhost:3000/auth/facebook/callback


### handling logout in oauth2 

1. you can logout user from your app using express-session.
2. when you allow user to logout, it means user logging out from your app. but user is not logged out from Facebook.
3. user still logged in facebook. ( need to explore this, what could be the way to logout from facebook too.)
