var http =require('http');

var server = http.createServer(function(req,res){
   res.setHeader('content-type','text/plain');
   res.end('Hello World!\n')
});

server.listen(3000);
console.log('server: http://127.0.0.1:3000');
