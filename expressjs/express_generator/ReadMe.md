#### express generator creates project structore: like spring boot

#### install/ create project

        make sure node and npm installed
        
        old
        //npm install express-generator
        //express projectname viewengine="your choice"
        
        new
        create folder projectname
        projectname> npx express-generator  
        projectname> npm install
        projectname> npx nodemon
        
        note: you might have to add helmet lib youself
        
#### entry file and port number

      entry point file : bin/www : here you can see the port on which app is running
      
#### setting port number
        
        pass from command line or set directly in bin/www
        
#### express uses view engine

        use your choice of view engine while creating express project (express-generator command)
        
      
     
