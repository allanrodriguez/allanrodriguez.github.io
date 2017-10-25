var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	console.log(req.url);
	if (req.url == "/") {
		fs.readFile('./index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});
	} else {
		fs.readFile('./' + req.url, function(err, data) {
			if (err == null) {
				if (req.url.search("\\.css") == req.url.length - 4) {
					console.log("css");
					res.writeHead(200, {'Content-Type': 'text/css'});
				} else if (req.url.search("\\.pdf") == req.url.length - 4) {
					console.log("pdf");
					res.writeHead(200, {'Content-Type': 'application/pdf'});
				} else if (req.url.search("\\.js") == req.url.length - 3) {
					console.log("js");
					res.writeHead(200, {'Content-Type': 'application/javascript'});
				} else {
					console.log("html");
					res.writeHead(200, {'Content-Type': 'text/html'});
				}
				res.write(data);
			} else {
				console.log(req.url + " not found!");
			}
			res.end();
		});
	}
}).listen(8080);