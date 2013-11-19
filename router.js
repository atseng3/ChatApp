var fs = require('fs');

function route(request, response){
  if (request.url == "/") {
    fs.readFile("./public/index.html", function(err, data){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(data);
    });

  } else {
      fs.readFile("." + request.url, function (err, data) {
      if (err) {
        console.log("ERROR: you went to a bad page");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Error: page not found.");
        response.end();
      } else {
        response.end(data);
      };
    });
  }
}

exports.route = route;