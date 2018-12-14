'use strict';
const https = require('https');
const crypto = require('crypto');  

var payments = {

	visa : function(req , res , next)
	{
		
        var timestamp = Math.floor(Date.now() / 1000);  
        var resourcePath = '';
        var queryParams = '';
        var postBody = '';
        var sharedSecret = '';
        
        var preHashString = timestamp + resourcePath + queryParams + postBody;  
       
        var hashString = crypto.createHmac('SHA256', sharedSecret).update(preHashString).digest('hex');  
        var xPayToken = 'xv2:' + timestamp + ':' + hashString;
        
		var fieldsToSet = 
		{
			status     : req.body.status,
			products   : req.body.products,
			total      : req.body.total
		};

		
	  },
	mastercard : function(req , res , next)
	{
		
	}
	
	  
}
module.exports = payments;