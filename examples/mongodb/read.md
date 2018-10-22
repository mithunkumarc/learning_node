#### reading all records from database
##### create folder "test"

##### create node project
        test> npm init

##### download mongodb dependency
        test> npm install mongodb --save 

##### read.js
      
      var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";
      
      //  {useNewUrlParser : true} , if you are using new mongo version      
      MongoClient.connect(url , { useNewUrlParser: true } , function(err, db) {
        if (err) throw err;
        //database name : test
        var dbo = db.db("test");
        //collection name : test
        dbo.collection("contacts").find({}).toArray(function(err, result) {
          if (err) throw err;
            for(let n in result){
            //interpolation : note backticks
          console.log(` name : ${result[n].name} id : ${result[n]._id}`);	
        }
          db.close();
        });
      });
      
     
      
##### execute : test> node read.js      
