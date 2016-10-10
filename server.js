var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var DiseaseApi = require('./api/diseasesapi.js');
var TestApi = require('./api/dbTestApi.js');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  new DiseaseApi(app);
  new TestApi(app);

  console.log('app listening at http://%s:%s', host, port);
});