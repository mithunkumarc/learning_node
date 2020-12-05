
1. create a folder MyProject
2. run command npm init, 

        MyProject> npm init

3. above command will create file package.json, where all the project info/dependencies are mentioned
4. install dependencies required

        MyProject> npm install <your_package_name>
        
5. in the package.josn there will be one file considered as main file to execute, lets say index.js

6. run index.js file

        MyProject> node index.js        
        
7. use nodemon package for reloading feature

        MyProject> npm install nodemon
        MyProject> npx nodemon index.js
