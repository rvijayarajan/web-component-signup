var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/scripts/jquery.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
});

app.get('/scripts/angular.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/angular/angular.min.js'));
});

app.get('/scripts/bootstrap.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'));
});

app.get('/scripts/bootstrap.bundle.min.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'));
});

app.get('/scripts/ui-bootstrap.js', function(req, res){
  res.sendFile(path.join(__dirname + '/node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js'));
});

app.get('/index.js', function(req, res){
  res.sendFile(path.join(__dirname + '/index.js'));
});

app.get('/css/bootstrap-grid.css', function(req,res){
	res.sendFile(path.join(__dirname + '/node_modules/bootstrap/dist/css/bootstrap-grid.css'))
});

app.get('/css/bootstrap-reboot.css', function(req,res){
	res.sendFile(path.join(__dirname + '/node_modules/bootstrap/dist/css/bootstrap-reboot.css'))
});

app.get('/css/bootstrap.css', function(req,res){
	res.sendFile(path.join(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.css'))
});

app.get('/css/ionicons.css', function(req,res){
  res.sendFile(path.join(__dirname + '/node_modules/ionicons/dist/css/ionicons.css'))
});

app.get('/fonts/ionicons.eot', function(req,res){
  res.sendFile(path.join(__dirname + '/node_modules/ionicons/dist/fonts/ionicons.eot'))
});

app.get('/fonts/ionicons.svg', function(req,res){
  res.sendFile(path.join(__dirname + '/node_modules/ionicons/dist/fonts/ionicons.svg'))
});

app.get('/fonts/ionicons.ttf', function(req,res){
  res.sendFile(path.join(__dirname + '/node_modules/ionicons/dist/fonts/ionicons.ttf'))
});

app.get('/fonts/ionicons.woff', function(req,res){
  res.sendFile(path.join(__dirname + '/node_modules/ionicons/dist/fonts/ionicons.woff'))
});

app.get('/fonts/ionicons.woff2', function(req,res){
  res.sendFile(path.join(__dirname + '/node_modules/ionicons/dist/fonts/ionicons.woff2'))
});

app.get('/signup.html', function(req, res){
  res.sendFile(path.join(__dirname + '/signup.html'));
});

app.listen(3000);