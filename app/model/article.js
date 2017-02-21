var Article = function(id, title, description, weight) {
	this.id = id;
	this.title = title;
	this.description = description;
	this.weight = weight;
}

Article.prototype.getCategoryId = function() {
	return this.id.split('.')[0];
};

Article.prototype.getSectionId = function() {
	var idParts = this.id.split('.');
	return idParts[0] + '.' + idParts[1];
};

module.exports = Article;