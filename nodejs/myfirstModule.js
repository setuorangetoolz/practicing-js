const http = require('https');

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end("hello world")
}).listen(8080)


// create own
exports.myDateTime = function (){
    return Date()
}