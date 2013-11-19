var app = require('../index.js')
var io = require('socket.io')
var chat_file = require('../public/javascripts/chat.js')

function createChat(httpServer) {
  console.log("before io.listen");
  var socket_io = io.listen(httpServer);

  socket_io.sockets.on('connection', function (socket){
    socket.on('received_message', function (data) {
      socket.emit("acknowledged", data.user_input);
      socket.broadcast.emit("acknowledged", data.user_input);
    });
  });
}

exports.createChat = createChat;
