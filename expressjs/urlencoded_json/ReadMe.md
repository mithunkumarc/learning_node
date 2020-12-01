Below two methods are important to read body requests parameters

#### express.urlencoded()  : content-type : urlencoded

        important, it uses body parser to read requests, if you skip this req.body becomes empty.
        
#### express.json()  : 

        converts incoming format of request to json. 
