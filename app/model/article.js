var Article = function(articleId, title, description, weight) {
	this.id = articleId;
	this.title = title;
	this.description = description;
	this.weight = weight;
}

Article.prototype.getCategoryId = function() {
	return this.articleId.split('.')[0];
};

Article.prototype.getSectionId = function() {
	var idParts = this.articleId.split('.')[1];
	return idParts[0] + '.' + idParts[1];
};

module.exports = Article;