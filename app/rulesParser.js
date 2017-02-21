var _ = require('lodash');
var ContentManager = require('./contentManager');
var rulesData = require('./data/rules');

var RulesParser = function() {};

function resolveGenericKey(keyPartToResolve, valueToReplace) {
	if (!keyPartToResolve) {
		return '';
	}

	if (keyPartToResolve === '_') {
		return valueToReplace;
	}

	return keyPartToResolve;
};

function resolveActivityIdKey(keyToResolve, activityId) {
	// TODO: handle case where there's no value or number in activityId - ignore?
	var values = activityId.split('.');
	var keyToReslveParts = keyToResolve.split('.');

	var resolvedCategory = resolveGenericKey(keyToReslveParts[0], values[0]);
	var resolvedSection = resolveGenericKey(keyToReslveParts[1], values[1]);
	var resolvedNumber = resolveGenericKey(keyToReslveParts[2], values[2]);
	var resolvedValue = resolveGenericKey(keyToReslveParts[3], values[3]);

	var resolvedKey = resolvedCategory;

	if (resolvedSection) {
		resolvedKey += '.' + resolvedSection;

		if (resolvedNumber) {
			resolvedKey += '.' + resolvedNumber;

			if (resolvedValue) {
				resolvedKey += '.' + resolvedValue;
			}
		}
	};

	return resolvedKey;
};

function resolveContentIdKey(keyToResolve, contentId) {
	// TODO: handle case where there's no content section or number - ignore?
	var values = contentId.split('.');
	var keyToReslveParts = keyToResolve.split('.');

	var resolvedCategory = resolveGenericKey(keyToReslveParts[0], values[0]);
	var resolvedSection = resolveGenericKey(keyToReslveParts[1], values[1]);
	var resolvedNumber = resolveGenericKey(keyToReslveParts[2], values[2]);

	var resolvedKey = resolvedCategory;

	if (resolvedSection) {
		resolvedKey += '.' + resolvedSection;

		if (resolvedNumber) {
			resolvedKey += '.' + resolvedNumber;
		}
	};

	return resolvedKey;
};

function parseRules(triggeredActivityId, activityContentId) {
	var parsedRules = {};

	_.forOwn(rulesData, function(unparsedActivityRules, unparsedActivityId, object) {
		var resolvedRuleKey = resolveActivityIdKey(unparsedActivityId, triggeredActivityId);

		var ruleObject = {};

		_.forOwn(unparsedActivityRules, function(weight, unparsedContentId, object) {
			var resolvedContentIdKey = resolveContentIdKey(unparsedContentId, activityContentId);
			ruleObject[resolvedContentIdKey] = weight;
		});

		parsedRules[resolvedRuleKey] = ruleObject;
	});

	return parsedRules;
};

RulesParser.prototype.applyRules = function(articlesList, activityId, activityContentId) {
	var rulesList = parseRules(activityId, activityContentId);
	var currentRule = rulesList[activityId];

	var contentManager = new ContentManager(articlesList);

	_.forOwn(currentRule, function(weightValue, key, object) {
		contentManager.applyWeightToContent(key, weightValue);
	});

	return contentManager.articles;
};


exports.RulesParser = new RulesParser();