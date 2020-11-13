index.js


        const yargs = require('yargs')

        // yargs allows us to customize version
        yargs.version('1.1.0')

        // yargs handling add command
        yargs.command({
          command: 'add',
          describe: 'add a new note',
          handler: () => {
                console.log('Adding a new note!')
            }
        })

        console.log(yargs.argv)

output

        // if you are running in repl make sure you have installed yargs
        // ctrl + shif + p : open shell
        
        ~/nodejsplayground$ node index.js add
        //handler function called
        Adding a new note!
        // yargs.argv
        { _: [ 'add' ], '$0': 'index.js' }
        
