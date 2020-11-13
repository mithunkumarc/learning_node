#### builtin http nodejs module

reference : checkout : https://blog.bearer.sh/node-http-request/


using nodejs http builtin module

            const http = require("http")

            http
              .request(
                {
                  hostname: "postman-echo.com",
                  path: "/status/200"
                },
                res => {
                  let data = ""

                  res.on("data", d => {
                    data += d                 //response comes as a readable stream, we need to assemble it. 
                  })
                  res.on("end", () => {
                    console.log(data)          //when request completed, this event is fired
                  })
                }
              )
              .end()
              
This code block makes a GET request to http://postman-echo.com/status/200 and logs the response to the console.  
In this example, we are passing it the hostname and path.    
We didn't set a method, because GET is the default.   

This example focuses on two key events. The data event and the end event.   
Because the response comes as a readable stream, we need to assemble it.   
For stringified responses you can build a string.    
Alternately, it may be a good idea to push to an array and then use a buffer to assemble the result like we do in the createServer article.  

Each time the data event fires we append to a string.  
Finally, when the end event fires we log the result.  
At the end of the call, we chain the end() method.  


#### wrapping up

In most cases it is a better choice to use one of the many libraries available on NPM.  
Especially one that supports promises and async/await.  
