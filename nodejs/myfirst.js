const http = require('https');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end("hello world")
}).listen(8080)
