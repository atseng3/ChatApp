var server = require("./server");
var requestHandlers = require("./request_handlers");
var router = require("./router");

var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.start;

server.start();