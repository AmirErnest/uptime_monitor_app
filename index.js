/*
* file to call when invoking the app
*
* Primary file for the API
*/

/* starting a server */

// Dependencies, HTTP server that let you listen on ports
// require http module
var http = require('http');
//require the url library
var url = require('url');

// The server should respond to all requests with a string

/* server object, call back function that has request and respond.
* this function get called everytime the local host 3000 opened.
* request and respond are new everytime the url is opened.
* the request here represents the url the user asking for,
* in this case it is the local host 3000 with all the http and slashes */
var server = http.createServer(function(req, res) {

  /* Get the URL and parse it, the parameter true here: calling the queryString model,
     now parsedUrl is an object that contains a bunch of keys about the request paths */
  var parsedUrl = url.parse(req.url, true);

  /* Get the path from the URL, pathname is a key in parsedUrl object. it is the path in the url.
     trimming any slashes from the path. */
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  //get the query string as an object
  var queryStringObject = parsedUrl.query;

  // before sending the Response
  // Get the HTTP method (for example get request) -
  // the req object (defined in function up) is new for every single incoming request.
  var method = req.method.toLowerCase();

  // Send the Response
  res.end('Hello World!\n');

  // Log the request path and method
  console.log('Request is received on path: ' + trimmedPath + ' with this method '+
                method + ' and with these query string parameters', queryStringObject);


});


// start the server, and have it listen on port 3000
server.listen(3000, function(){
  console.log("The server is listening on port 3000 now");
});
