var fs = require('fs');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var comments = [{author: 'Pete Hunt', text: 'Hey there!'}];

app.use('/', express.static(__dirname));
app.use(bodyParser());

app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.listen(3000);
