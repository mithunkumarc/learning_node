setTimout always gets executed when callstack is completed

example

index.js

          console.log("starting")

          setTimeout(() => {
            console.log("0 seconds timer")        // this will get executed after all other tasked completed in main thread.
          },0);


          setTimeout(() => {
            console.log("2 seconds timer")
          },2000) // exectues after 2 seconds

          console.log("stopping")


output : 

          > node index.js
          
          starting
          stopping        
          0 seconds timer     // setTimout with 0 seconds executed as callstack( all other tasks done in main thread )
          2 seconds timer
