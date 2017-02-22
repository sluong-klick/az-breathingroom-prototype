function displayArticles(articles) {
	$('#heroSection').empty();
	$('#articleSection').empty();

	for (var i = 0; i < articles.length; i++) {

		var article = articles[i];
		var articleBlock = (i === 0) ? $('<div class="jumbotron">') : $('<div class="col-xs-6 col-lg-4">');
		var title = $('<h1>').text(article.title);
		var description = $('<p>').text(article.description);

		title.appendTo(articleBlock);
		description.appendTo(articleBlock);

		if (i === 0) {
			articleBlock.appendTo('#heroSection');
		} else {
			articleBlock.appendTo('#articleSection');
		}
	};
};

function getUpdatedContent(path, currentActivities) {
	var postBody = {
		"activities": currentActivities
	};

	console.log("Initiating Request: path=" + path + ", postBody=" + JSON.stringify(postBody, null, 2));

	$.post('http://localhost:3000/' + path, postBody, function(response) {
		console.log("Response: " + JSON.stringify(response, null, 2));

		localStorage.setItem("azActivities", JSON.stringify(response.activities));
		displayArticles(response.articles);
	}, 'json');
};

function triggerEmailCampaignActivity() {
	var currentActivities = localStorage.getItem("azActivities");
	getUpdatedContent("articles/action/1.1/content/A.3.a", currentActivities);
};

function triggerAdLinkActivity() {
	var currentActivities = localStorage.getItem("azActivities");
	getUpdatedContent("articles/action/1.2/content/B.2", currentActivities);
};

function resetActivities() {
	getUpdatedContent("articles", null);
};

function onClickHomeTab() {
	$('#menu-home').addClass('active');
	$('#menu-behaviour').removeClass('active');

	$('#tab-home').addClass('active');
	$('#tab-behaviour').removeClass('active');
};

function onClickBehaviousTab() {
	$('#menu-home').removeClass('active');
	$('#menu-behaviour').addClass('active');

	$('#tab-home').removeClass('active');
	$('#tab-behaviour').addClass('active');
};

function onClickSurveySubmit() {
	var isAsthmaSelected = $('#survey-answer-asthma:checked').val();
	// var isCOPDSelected = $('#survey-answer-copd').val();
	var contentId = isAsthmaSelected ? "3.1.1.a" : "3.1.1.b";
	var path = "articles/action/1.2/content/" + contentId;

	var currentActivities = localStorage.getItem("azActivities");
	getUpdatedContent(path, currentActivities);
}

$(document).ready(function() {
	// get initial data with existing activities list and no action
	var currentActivities = localStorage.getItem("azActivities");
	getUpdatedContent("articles", currentActivities);
});