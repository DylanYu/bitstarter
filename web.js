var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var strBuf = fs.readFileSync('indexl.html');
var str = strBuf.toString()

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
