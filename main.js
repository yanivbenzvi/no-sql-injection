var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://192.168.44.15', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('Database connected');
});

mongoose.connection.on('error', error => {
    console.log('Database connection failed');
    console.log(error);
});

app.get('/', (req, res) => {
    var data = '<p>Hello Vagrant!</p>';
    if (mongoose.connection.readyState) {
        data += '<p>Connected to MongoDB</p>';
    } else {
        data += '<p>Not connected to MongoDB :(</p>';
    }
    res.send(data);
});

app.listen('3000', () => {
    console.log('Listening on port 3000');
});