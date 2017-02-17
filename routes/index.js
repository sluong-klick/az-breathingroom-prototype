var express = require('express');
var router = express.Router();
var contentEngine = require('../public/javascripts/contentEngine')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET list of content */
router.post('/articles/action/:actionId', function(req, res, next) {
  var response = contentEngine.getContentList(req.params.activities, req.params.actionId);
  res.send(response);
});

module.exports = router;
