
var express    = require('express');
var bodyParser = require('body-parser');
var http     = require('http');
var path     = require('path');
var jwt      = require('jsonwebtoken');
//var access   = require('./access');

var app = express();

app.server = http.createServer(app);


//app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");  
    //res.header('Access-Control-Expose-Headers', 'Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type , Authorization');
    next();
});


require('./routes')(app);

app.server.listen(process.env.PORT || 6500);

console.log('Process ' + process.pid + ' is listening to all incoming requests');
