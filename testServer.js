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
			if (req.url.search(".css") < 0) {
				res.writeHead(200, {'Content-Type': 'text/html'});
			} else {
				res.writeHead(200, {'Content-Type': 'text/css'});
			}
			res.write(data);
			res.end();
		});
	}
}).listen(8080);