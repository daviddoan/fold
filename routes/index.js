var express = require('express');
var url = require('url');
var router = express.Router();

var functions = require('../functions.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/oauthToken', function(req, res) {
  functions.oauthToken(req.query.code);
});

router.get('/userInfo', function(req, res) {
  functions.userInfo(req.query.accessToken);
});

router.get('/balanceInfo', function(req, res) {
  functions.balanceInfo(req.query.accessToken);
});

module.exports = router;
