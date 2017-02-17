function getContentList(activitiesList, actionId) {
	var articles = {
		content: {
			{
				id: "A.1.a",
				title: "Living with Asthma",
				description: "Living with Asthma Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
			},{
				id: "A.2.a",
				title: "Asthma in the workplace",
				description: "Asthma in the workplace Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
			},{
				id: "C.1.a",
				title: "Specific Nutrition",
				description: "C.1.a Specific Nutrition Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
			}
		}
	};

	activitiesList.push(actionId);

	return {activities: activitiesList, articles: articles};
}