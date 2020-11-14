###### node : node is not a framework, node is an run time env for js
      cross platfrom
      opensource
      run time environment for java script outside browser


      great for prototyping and agile development
      superfast and highly scalable
      javascript everywhere : fullstack

      architecture
      js code -> js engine(v8) -> execute

      history : browser was only rte for javascript
      after 2009 : ryan dahl : node (v8 embedded in c++) 


    node = v8(chrome uses as js engine) embedded in c++
    
    
    
##### link for creating node project
            https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/
            
#### todo

            https://github.com/goldbergyoni/nodebestpractices



##### node js follows non blocking, asynchronous model
            synchronous
                  one thread per one request
                  add another server if request outnumber threads

            asynchronous
                  one thread handles multiple request by event loop
                  effective usage of idle time of thread
                  event queue informs thread that data is ready to send

##### when to use node
                  when not to use node
                  do not use node for cpu instensive apps : video/audio

                  when to use node : 
                  data intensive and real time apps(web app)


#### use nodemon for reloading node project

            for linux : npx nodemon index.js 
