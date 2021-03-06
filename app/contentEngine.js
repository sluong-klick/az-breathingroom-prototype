var _ = require('lodash');

var Activity = require('./model/activity');
var Article = require('./model/article');
var articles = require('./data/contentArticles');
var rulesParser = require('./rulesParser').RulesParser;


function getSortedArticlesList(activitiesList) {
	//initialize weight to 0 on articles list
	var articlesList = _.map(articles, function(article) {
		return new Article(article.id, article.title, article.description, 0);
	});

	// for each activity item, apply the related rule to articles list
	_.forEach(activitiesList, function(activity) {
		articlesList = rulesParser.applyRules(articlesList, activity.id, activity.contentId);
	});

	return _.orderBy(articlesList, ['weight'], ['desc']);
};

var getContentList = function(activitiesList, newActivityId, newActivityContentId) {
	if (!activitiesList) {
		activitiesList = [];
	}

	if (newActivityId && newActivityContentId) {
		var newActivity = new Activity(newActivityId, newActivityContentId);
		activitiesList.push(newActivity);
	}

	var sortedContentList = getSortedArticlesList(activitiesList);

	return {
		activities: activitiesList,
		articles: sortedContentList
	};
};


exports.getContentList = getContentList;