var Activity = function(id, groupId, contentId, activityData) {
	this.id = id;
	this.groupId = groupId || null;
	this.contentId = contentId || null;
	this.activityData = activityData || null;
}

module.exports = Activity;