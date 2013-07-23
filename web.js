var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var newBuffer = fs.readFileSync("index.html");
var newString = newBuffer.toString(); 

app.get('/', function(request, response) {
  response.send(newString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
