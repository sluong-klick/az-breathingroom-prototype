var _ = require('lodash');

var Activity = require('./model/activity');
var Article = require('./model/article');
var articles = require('./data/contentArticles');
var rulesParser = require('./rulesParser').RulesParser;


function getSortedArticlesList(activitiesList, activityContentId) {
	//initialize weight to 0 on articles list
	var articlesList = _.map(articles, function(article) {
		return new Article(article.id, article.title, article.description, 0);
	});

	// for each activity item, apply the related rule to articles list
	_.forEach(activitiesList, function(activity) {
		articlesList = rulesParser.applyRules(articlesList, activity.id, activityContentId);
	});

	return _.orderBy(articlesList, ['weight'], ['desc']);
};

var getContentList = function(activitiesList, newActivityId, newActivityContentId) {
	if (!activitiesList) {
		activitiesList = [];
	}

	if (newActivityId) {
		var newActivity = new Activity(newActivityId);
		activitiesList.push(newActivity);
	}

	var sortedContentList = getSortedArticlesList(activitiesList, newActivityContentId);

	return {
		activities: activitiesList,
		articles: sortedContentList
	};
};


exports.getContentList = getContentList;