var express = require('express');
var app = express();

app.get('/v1/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/v1/now', function (req, res) {
    res.send(new Date());
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
