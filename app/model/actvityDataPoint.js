var ActvityDataPoint = function(id, groupId, articleId, data) {
	this.activityId = id;
	this.groupId = groupId;
	this.articleId = articleId;
	this.activityData = data;
}

module.exports = ActvityDataPoint;