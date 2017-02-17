var express = require('express');
var router = express.Router();
var contentEngine = require('../app/contentEngine')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET list of content */
router.post('/articles/action/:actionId', function(req, res, next) {
  var response = contentEngine.getContentList(req.params.activities, req.params.actionId);
  console.log(response);
  res.json(response);
});

module.exports = router;
