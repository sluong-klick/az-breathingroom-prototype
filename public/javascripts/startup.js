function loadArticles(articles) {



};

$(document).ready(function () {
	// get initial data with existing activities list and no action
	$.ajax({
	  type: "POST",
	  url: "localhost:3000/articles/action/:actionId",
	  data: {},
	  success: loadArticles(data),
	  dataType: dataType
	});


});