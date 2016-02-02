var express = require('express');
var app = express();
var sleep = require('sleep');

app.set('port', (process.env.PORT || 3000));
app.get('/v1/hello', function (req, res) {
  res.send('Hello World!');
});

app.get('/v1/now', function (req, res) {
    res.send(new Date());
});

app.get('/v1/sleep', function (req, res) {
    var x = req.query.seconds || 10;
    if(x > 30) x = 30;
    sleep.sleep(x);
    res.send('Slept for ' + x + ' seconds.');
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
