var express = require('express');
var request = require('request');
var url = require('url');

var clientID = "fa908ac547fc45176e3e735851cd6c504fd853cf1f0d91e2a5192d9fa6f3e89a";
var clientSecret = "03dcc5dde881365e012ae61da754b63b41371d2bf5b0c9712b92d93c522c1b2b";

module.exports = {

	oauthToken : function (code){

	var optionsAuth = {
		url : 'https://api.coinbase.com/oauth/token',
		method : 'POST',
		form : {	
			'grant_type' : 'authorization_code',
			'code': code,
			'client_id' : clientID,
			'client_secret' : clientSecret,
			'redirect_uri' : 'https://www.google.com/',
		},
	};

	request.post(optionsAuth, function (error,response,body) {
        console.log('what');
        console.log(body);
        console.log(error);
	});

	}
}