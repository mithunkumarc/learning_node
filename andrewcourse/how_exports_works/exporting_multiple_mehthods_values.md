user.js

          const getName = () => {
              return "Jill";
          }

          const getLocation = () => {
              return "Orlando";
          }

          const dateOfBirth = "28/02/1990";

          // you could use exports too
          module.exports.getName = getName
          module.exports.getLocation = getLocation
          module.exports.dob = dateOfBirth


app.js

        // since user is exporting two function and a variable
        const {getName, getLocation, dob } = require('./user')
        console.log(getName());
        console.log(getLocation());
        console.log(dob);
        
output 

        Jill
        Orlando
        28/02/1990

