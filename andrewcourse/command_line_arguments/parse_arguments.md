index.js

        const yargs = require('yargs')

        // yargs allows us to customize version
        yargs.version('1.1.0')

        console.log(yargs.argv)

output :

        ~/nodejsplayground$ node index.js --score=100 --match=playoff          
        { _: [], score: 100, match: 'playoff', '$0': 'index.js' }
