var http = require("http");
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var router = require('./router.js')
var socket = require('./lib/chat_server.js');

function start(){
  var httpServer = http.createServer(router.route);

  httpServer.listen(8080);

  socket.createChat(httpServer);

  console.log("Server running at http://127.0.0.1:8080/");
}

exports.start = start;
