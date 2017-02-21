var express = require('express');
var router = express.Router();
var contentEngine = require('../app/contentEngine');
var logger = require('../app/utils/logger');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

router.post('/articles/action/:actionId/content/:contentId', function(req, res, next) {
	var activities = req.body.activities ? JSON.parse(req.body.activities) : null;
	var response = contentEngine.getContentList(activities, req.params.actionId, req.params.contentId);

	logger.log("Debug", "Response content", response);

	res.json(response);
});

/* GET initial list of content */
router.post('/articles', function(req, res, next) {
	var activities = req.body.activities ? JSON.parse(req.body.activities) : null;
	var response = contentEngine.getContentList(activities);

	logger.log("Debug", "Response content", response);

	res.json(response);
});

module.exports = router;