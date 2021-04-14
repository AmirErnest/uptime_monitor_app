/*
* file to call when invoking the app
*
* Primary file for the API
*/

/* starting a server */

//Dependencies, HTTP server that let you listen on ports
//require http module
var http = require('http');

//The server should respond to all requests with a string

//server object, call back function that has request and respond.
var server = http.createServer(function(req, res) {
  res.end('Hello World!\n');
});


//start the server, and have it listen on port 3000
server.listen(3000, function(){
  console.log("The server is listening on port 3000 now");
});
