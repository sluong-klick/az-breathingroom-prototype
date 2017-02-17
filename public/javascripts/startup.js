function displayArticles(articles) {
	$('#heroSection').empty();
	$('#articleSection').empty();

	for (var i=0; i<articles.length; i++) {
		console.log(articles);

		var articleBlock = (index === 0) ? $('<div class="jumbotron">') : $('<div class="col-xs-6 col-lg-4">');
		var title = $('<h1>').text(article.title);
		var description = $('<p>').text(article.description);

		title.appendTo(articleBlock);
		description.appendTo(articleBlock);

		if (index === 0) {
			articleBlock.appendTo('#heroSection');
		} else {
			articleBlock.appendTo('#articleSection');
		}
	};
};

function getUpdatedContent(currentActivities) {
	$.post('http://localhost:3000/articles/action/:actionId', currentActivities, function(response) {
	    document.cookie.activities = response.activities
	    displayArticles(response.articles);
	}, 'json');
}

$(document).ready(function () {
	// get initial data with existing activities list and no action
	getUpdatedContent(document.cookie.activities);
});