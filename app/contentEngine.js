var _ = require('lodash');

var Activity = require('./model/activity');
var Article = require('./model/article');
var articles = require('./data/contentArticles');
var rulesParser = require('./rulesParser').RulesParser;


function getSortedContentList(activitiesList, activityContentId) {
	//initialize weight on articles list
	var articlesList = _.map(articles, function(article) {
		return new Article(article.id, article.title, article.description, 0);
	});

	// for each activity item, apply rules to articles list
	_.forEach(activitiesList, function(activity) {
		articlesList = rulesParser.applyRules(articlesList, activity.id, activityContentId);
	});

	return _.orderBy(articlesList, ['weight'], ['desc']);
};

var getContentList = function(activitiesList, newActivityId) {
	if (!activitiesList) {
		activitiesList = [];
	}

	if (newActivityId) {
		var newActivity = new Activity(newActivityId);
		activitiesList.push(newActivity);
	}

	var sortedContentList = getSortedContentList(activitiesList);

	return {
		activities: activitiesList,
		articles: sortedContentList
	};
};


exports.getContentList = getContentList;