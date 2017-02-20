var express = require('express');
var router = express.Router();
var contentEngine = require('../app/contentEngine');
var logger = require('../app/utils/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/articles/action/:actionId/content/:contentId', function(req, res, next) {
  logger.log("Debug", "Response content", response);
  var response = contentEngine.getContentList(req.body.activities, req.params.actionId);
  logger.log("Debug", "Response content", response);
  res.json(response);
});

/* GET initial list of content */
router.post('/articles', function(req, res, next) {
  var response = contentEngine.getContentList(req.body.activities);
  logger.log("Debug", "Response content", response);
  res.json(response);
});

module.exports = router;
