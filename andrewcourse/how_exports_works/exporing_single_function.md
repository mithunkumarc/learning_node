#### also can be said as exporting a Default Value(getName function)


user.js

            const getName = () => {
                return "Jill"
            }

            // you could use exports too
            module.exports = getName
            
            
app.js

            // since user is exporting only one function, directly access and call it
            const getName = require('./user')
            console.log(getName());
            
            
output : 

            Jill
