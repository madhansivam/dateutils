var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.get('/v1/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/v1/now', function (req, res) {
    res.send(new Date());
});

app.get('/v1/neverreturn', function (req, res) {
    // nothing to send
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
