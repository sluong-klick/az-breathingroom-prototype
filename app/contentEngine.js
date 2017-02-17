var articles = require('./data/contentArticles');


function getContentList(activitiesList, newActivity) {

	activitiesList.push(newActivity);

	return {activities: activitiesList, articles: articles};
}