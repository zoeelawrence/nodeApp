/**
 * Created by 1406425 on 21/11/2016.
 */
var http = require('http')
var port = process.env.PORT || 1337;

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(port);
