var express = require('express'),
    HTTPStatus = require('http-status'),
    winston = require('winston');

var app = express();

app.get('/', function(req, res){
  res.send('Hello World',  HTTPStatus.OK);
});

app.listen(3000);
winston.info('Express started on port 3000');
