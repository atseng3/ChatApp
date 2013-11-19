function Chat(socket_io) {
  this.socket_io = socket_io;
  var that = this;
  this.socket_io.on("acknowledged", function (data){
    that.addToDisplay(data);
  });
}

Chat.prototype.getMessage = function () {
  var that = this;
  $('#target').on('submit', function (event) {
    event.preventDefault();
    var user_input = $(event.currentTarget).serializeArray()[0].value;
    that.socket_io.emit('received_message', { user_input: user_input });
  });
}

Chat.prototype.addToDisplay = function (data) {
  var divWithText = $('<div></div>').text(data);
  $('.messages').append(divWithText);
}
