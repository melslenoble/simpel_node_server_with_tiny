'use strict'

var path 	= require('path');
var fs 		= require('fs-extra');
var http 	= require("http");
var tinify 	= require("tinify");


var listener , _socket;
var filedir = __dirname;
var d = ""

tinify.key 	= "dBHNgE7nxWjYkp4_tuO57HzFu7rbsd8o";

var app = http.createServer(function(request, response) {
	var filePath = path.join(filedir, "html", request.url)
	request.on('data', function (chunk) {
				if(chunk != "1:1"){d += chunk;}
       	});
	request.on('end', function (chunk) {
		

		base64_decode(String(d).substring( "data:image/png;base64,".length ), 'copy.png');
		var s = tinify.fromFile('copy.png')
		s.toFile("copy2.png")
		var b64d = base64_encode("copy2.png")
		var base64Data = d//String(chunk).substring( "data:image/png;base64,".length );
									response.writeHead(200, {
																		"Content-Type": "image/png",
																		"Access-Control-Allow-Origin" : "*"
									});
									response.end(base64Data, "image/png")

		d = ""

	})



	var extname = path.extname(filePath);
	var contentType = getContentType(extname)
	if(extname === ""){
		filePath = path.join(filedir,"html", "index.html")
	}
	
	if(extname === ".ico"){return}

	//console.log(request )

	
	fs.readFile(filePath, function(error, content) {
	if (error) {
		response.writeHead(500);
		response.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
		response.end()
	} else {
		

		response.writeHead(200, {
			"Content-Type": contentType,
			"Access-Control-Allow-Origin" : "*"
		});
		response.end(content, "utf-8")
	}
	})


}).listen(9999)

// listener = io.listen(app)
// listener.sockets.on('connection', on_connection);
// function on_connection(socket) {
//     _socket = socket;
//     _socket.emit("message", "ready!")

// }
function base64_decode(base64str, file) {
    // create buffer object from base64 encoded string, it is important to tell the constructor that the string is base64 encoded
    var bitmap = new Buffer(base64str, 'base64');
    // write buffer to file
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}


function getContentType(extname){var contentType="text/html";switch(extname){case ".js":contentType="text/javascript";break;case ".css":contentType="text/css";break;case ".json":contentType="application/json";break;case ".png":contentType="image/png";break;case ".jpg":contentType="image/jpg";break;case ".wav":contentType="audio/wav";break}return contentType};
