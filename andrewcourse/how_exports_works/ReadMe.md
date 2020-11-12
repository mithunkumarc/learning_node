source : https://www.sitepoint.com/understanding-module-exports-exports-node-js/


## exports vs module.exports

      exports and module.exports point at the same empty object.
      so generally it doesn't makes any difference which on you use. except one case.
      
#### general case:

user.js

        exports.foo = "foo"
        module.exports.bar = "bar"

index.js

        const userModule = require('./notes');
        console.log(userModule);

output : { foo: 'foo', bar: 'bar' }


#### exception case : while exporting function

user.js

        exports.foo = 'foo';
        module.exports = () => { console.log('bar'); };    // only this anonymous function exported. foo is ignored
      
      
index.js

      const userModule = require('./notes');
      console.log(userModule);
     
output : foo is ignored

      [Function] 


This would only result in an anonymous function being exported. The foo variable would be ignored.



#### conclusion : module.exports wins 
