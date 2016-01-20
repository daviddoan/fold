var express = require('express');
var url = require('url');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/oauth', function(req, res) {
	res.send(req.query);
});

module.exports = router;
