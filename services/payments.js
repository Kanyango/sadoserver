'use strict';
const https = require('https');
const crypto = require('crypto');  
var request = require('request')
var cors = require('cors');

var payments = {

	visa : function(req , res , next)
	{
		
        var timestamp = Math.floor(Date.now() / 1000);  
        var resourcePath = '/v2/payments';
        var queryParams = '9XS2NUQR97HTKTJQGOWI21K--tSViYxPKgmJ8oPbbtacEqv0k';
        var postBody = req.body;
        var sharedSecret = 'nEVIjxI@hPI+aK+Odii+v}/LAK$nAN5jyTSckO9f';
        
        var preHashString = timestamp + resourcePath + queryParams + postBody;  
       
        var hashString = crypto.createHmac('SHA256', sharedSecret).update(preHashString).digest('hex');  
        var xPayToken = 'xv2:' + timestamp + ':' + hashString;
		
        //console.log('Iam post body', postBody);
		
        
	request(
		{
        url   : 'https://sandbox.api.visa.com/cybersource/v2/payments?apikey=9XS2NUQR97HTKTJQGOWI21K--tSViYxPKgmJ8oPbbtacEqv0k',
	method: 'POST',
	headers: [ {name: 'content-type', value: 'application/json'},
		  {name: 'x-pay-token', value: xPayToken }],
        postData: postBody
		
		})
       
        
		
		
	  },
	mastercard : function(req , res , next)
	{
		
	}
	
	  
}
module.exports = payments;
