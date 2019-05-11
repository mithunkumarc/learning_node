const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
console.log('what is path ',path)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.htm'))
})

app.get('/video', function(req, res) {
  const path = 'assets/sample.mp4'
  const stat = fs.statSync(path)
  const fileSize = stat.size
  console.log('what is file size ',fileSize);
  //request.header.range : server support partial data request 
  //for first request range value is undefined
  //next time range comes with  bytes=0-
  const range = req.headers.range
  
  //console.log('what is range : ' , range);
  
  if (range) {//true start with :  bytes=0-
    //initially range is zero
    const parts = range.replace(/bytes=/, "").split("-")
    
    const start = parseInt(parts[0], 10);
    
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1
    
    const chunksize = (end-start)+1
    console.log('what is range ',parts[0]);
    console.log('what is start ',start);
    console.log('what is end ',end);
    console.log('what is chunk size ',chunksize);
    console.log('content range ',start-end/fileSize);
    //creating chunk file, video sent as chunks of files
    //start : from when to start new chunk of file
    //end : total size of file
    const file = fs.createReadStream(path, {start, end})
    
    
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }

    res.writeHead(206, head)
    file.pipe(res)
  } else {
    console.log('if range is zero');
    const head = {
      //sending chunksize same as file size for first request
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head);
    
    //path : assets/sample.mp4
    fs.createReadStream(path).pipe(res);
  }
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})


//first time we send full size as range lets say 100
//first a part of video will be downloaded by client , lets say 10
//next range(or start) is 100 - 10 = 90
//this start value will help createReadStream from when to start
//look at end is is always same as size of filesize
//end will help createReadStream that when stream has to end
//chunk size indicates what was the chunk of file which was downladed by part