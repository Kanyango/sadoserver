'use strict';
var payments    = require('./services/payments');

module.exports = function(app , passport)
{

    app.post('/visa',  payments.visa);
    app.post('/mastercard',  , payments.mastercard);
    
    app.all('/*', function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})
};