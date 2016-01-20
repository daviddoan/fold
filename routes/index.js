var express = require('express');
var url = require('url');
var router = express.Router();

var functions = require('../functions.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/oauth', function(req, res) {
  functions.oauthToken(req.query.code);
});

module.exports = router;
