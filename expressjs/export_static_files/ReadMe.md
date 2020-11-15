This example consists of exporting static files like images, styles.css and other resources


        ex : they can be acessed like localhost:3000/node.png (acessing image)
        
        
This example also consists of returning html as response

        __dir : is used to get current path, global var in nodejs


index.js

        // path : builtin module in nodejs
        const path = require('path');
        const express = require('express');

        const app = express();

        //static files can be accessed from url, which exists in public folder
        // http://localhost:3000/style.css
        // http://localhost:3000/node.png
        app.use(express.static('public'))

        // any request will get node.html as response
        app.all('/', (req, res) => {
          res.sendFile(path.join(__dirname + '/node.html'))
        });

        app.listen(3000);
        console.log("the server is listening on port 3000");
