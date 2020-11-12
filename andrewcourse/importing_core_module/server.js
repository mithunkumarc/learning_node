const fs = require('fs');

//fs.writeFileSync() : this method will recreate new file 
//fs.writeFileSync('notes.txt','This is kumar, Hello all good evening.')

//fs.appendFileSync() : this method will retail old file and content will be appended.
fs.appendFileSync('notes.txt','I am from small city.');