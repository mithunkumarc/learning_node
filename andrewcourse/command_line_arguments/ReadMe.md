built in way to read command line arugments

index.js

        const chalk = require('chalk');
        console.log(chalk.red(process.argv));


output : 

        > node index.js brunda --city=aikal       

        /usr/local/bin/node,/home/runner/nodejsplayground/index.js,
        brunda,
        --city=aikal                // this key value read as string, use yargs third party package to read as key value


#### use third party package to read and parse arguments

        yargs allows us to read and parse arguments
