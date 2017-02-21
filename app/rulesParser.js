var _ = require('lodash');
var ContentManager = require('./contentManager');
var rulesData = require('./data/rules');


var RulesParser = function() {};

var getRules = function(contentId) {
	// TODO: parse out rules list and replace predefined files
	this.rules = rulesData;
	return this.rules;
};

RulesParser.prototype.applyRules = function(articlesList, activityId, contentId) {
	var rulesList = getRules(contentId);
	var currentRule = rulesList[activityId];

	var contentManager = new ContentManager(articlesList);

	_.forOwn(currentRule, function(weightValue, key, object) {
		contentManager.applyWeightToContent(key, weightValue);
	});

	return contentManager.articles;
};


exports.RulesParser = new RulesParser();