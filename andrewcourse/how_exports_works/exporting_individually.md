user.js

          module.exports.getName = () => {
            return "Jill";
          }

          module.exports.getLocation = () => {
            return "Dakota";
          }

          module.exports.dob = "23/2/1988";
          
app.js

          const {getName, getLocation, dob} = require('./user');
          console.log(getName());
          console.log(getLocation());
          console.log(dob);
