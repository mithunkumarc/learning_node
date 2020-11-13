index.js

        console.log("starting")

        setTimeout(() => {
          console.log("2 seconds timer")
        },2000) // exectues after 2 seconds

        console.log("stopping")


output 

      ~/nodejsplayground$ node index.js
      starting
      stopping
      2 seconds timer                   # this output is not in sync with starting and stopping
