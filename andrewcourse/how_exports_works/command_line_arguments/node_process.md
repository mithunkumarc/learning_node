index.js

        const chalk = require('chalk');
        console.log(chalk.red(process.argv));


output

        // sending two arguments : single word "brunda" and a key value type "--city=aikal"
        > node index.js brunda --city=aikal

        /usr/local/bin/node,/home/runner/nodejsplayground/index.js,
        brunda,
        --city=aikal       // you can see here --city=aikal is considered as string , it is not parsed

