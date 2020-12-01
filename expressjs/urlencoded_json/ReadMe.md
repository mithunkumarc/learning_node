this example includes

#### npm helmet :

        Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

#### express urlencoded, json and static middlewares


Below two methods are important to read body requests parameters

#### express.urlencoded()  : content-type : urlencoded

        important, it uses body parser to read requests, if you skip this req.body becomes empty.
        
#### express.json()  : 

        converts incoming format of request to json. 


#### express.static('foldername')

        will make static files(html/css/images..) avaialble/accessed from client side
        
to run app :          
npm install  
npx nodemon index.js
