var articles = require('./data/contentArticles');

// var ContentEngine = function () {};

function getSortedContentList(activitiesList) {

	return articles;

};

var getContentList = function(activitiesList, newActivity) {
	if (!activitiesList) {
		activitiesList = [];
	}

	if (newActivity) {
		activitiesList.push(newActivity);
	}

	var sortedContentList = getSortedContentList(activitiesList);

	return {activities: activitiesList, articles: sortedContentList};
};

// should be singleton?
// module.exports = new ContentEngine();
exports.getContentList = getContentList;