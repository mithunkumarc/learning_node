index.js

        const yargs = require('yargs')

        // yargs allows us to customize version, usefull to set project version
        yargs.version('1.1.0')

        console.log(yargs.argv)

output : 

        ~/nodejsplayground$ node index.js --version
        1.1.0
