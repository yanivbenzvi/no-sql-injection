var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/', function(error){
	if(error) console.log(error);
});

app.get('/', function(req, res){
	var data = '<p>Hello Vagrant!</p>';
	if(mongoose.connection.readyState){
		data += '<p>Connected to MongoDB</p>';
	}else{
		data += '<p>Not connected to MongoDB :(</p>';
	}
	res.send(data);
});

app.listen('3000');
console.log('Listening on port 3000');
