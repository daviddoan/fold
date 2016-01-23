var express = require('express');
var https = require('https');
var request = require('request');
var url = require('url');
var coinbase = require('coinbase').Client;

var clientID = "fa908ac547fc45176e3e735851cd6c504fd853cf1f0d91e2a5192d9fa6f3e89a";
var clientSecret = "03dcc5dde881365e012ae61da754b63b41371d2bf5b0c9712b92d93c522c1b2b";

module.exports = {

	oauthToken : function (code) {

		var optionsAuth = {
			url : 'https://api.coinbase.com/oauth/token',
			method : 'POST',
			form : {	
				'grant_type' : 'authorization_code',
				'code': code,
				'client_id' : clientID,
				'client_secret' : clientSecret,
				'redirect_uri' : 'https://ancient-beach-66686.herokuapp.com/oauthToken',
			},
		};

		request.post(optionsAuth, function (res, req) {
		    var accessToken = JSON.parse(req.body).access_token;
		    console.log(JSON.parse(req.body)); 
		    console.log(accessToken);
		    res.redirect('https://www.google.com/' + accessToken);
		});

	},

	oauthRefresh : function (refreshToken) {
 	
 		var optionsAuth = {
 			url : 'https://api.coinbase.com/oauth/token',
 			method: 'POST',
 			form : {
 				'grant_type' : 'refresh_token',
 				'redirect_uri' : 'https://www.google.com/',
 				'client_id' : clientID,
 				'client_secret' : clientSecret,
 				'refreshToken' : refreshToken,
 			},

 		};

 		request.post(optionsAuth, function (error, token) {
 			console.log(token);
 		});
	},

	userInfo : function (accessToken) {

		var client = new coinbase({
			'accessToken' : accessToken, 
		});

		client.getCurrentUser(function (error, user) {
				console.log(user);
		});

	},

	balanceInfo : function (accessToken) {

		var client = new coinbase({
			'accessToken' : accessToken, 
		});

		client.getAccounts({}, function (error, accounts, res) {
			if (res.status == 401) {
				oauthRefresh(refreshToken);
			}

			accounts.forEach(function(acct) {
    			console.log('my bal: ' + acct.balance.amount + ' for ' + acct.name);
  			});
		});

	},


};