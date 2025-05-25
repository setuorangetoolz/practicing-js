const http = require('https');
const dt = require("./myfirstModule")

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write("hello world"+dt.myDateTime())
    res.end()
}).listen(8080)

