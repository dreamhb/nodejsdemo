var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log("query name " + query.name + " color = " + query.color);
});

module.exports = router;
