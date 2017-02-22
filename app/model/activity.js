var Activity = function(id, contentId, activityData) {
	this.id = id;
	this.contentId = contentId || null;
	this.activityData = activityData || null;
}

module.exports = Activity;