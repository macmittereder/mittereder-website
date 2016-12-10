var util = require('util'),
    http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createServer(9000, 'localhost').listen(80);

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied to: ' + req.url + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);