var _ = require('lodash');

var ContentManager = function(articles) {
	this.articles = articles;
};


var applyWeightToArticle = function(articlesList, articleId, weight) {
	return _.forEach(articlesList, function(article) {
		if (article.id === articleId) {
			article.weight += weight;
		}
	});
};

var applyWeightToSection = function(articlesList, sectionId, weight) {
	return _.forEach(articlesList, function(article) {
		if (article.getSectionId() === sectionId) {
			article.weight += weight;
		}
	});
};

var applyWeightToCategory = function(articlesList, categoryId, weight) {
	return _.forEach(articlesList, function(article) {
		if (article.getCategoryId() === sectionId) {
			article.weight += weight;
		}
	});
};

ContentManager.prototype.applyWeightToContent = function(ruleKey, weight) {

	// parse rule key
	var ruleKeyParts = ruleKey.split('.');

	// apply weight to article, section or category depending on the number of parts in the content Id
	switch (ruleKeyParts.length) {
		case 1:
			this.articles = applyWeightToArticle(this.articles, ruleKey, weight);
			break;
		case 2:
			this.articles = applyWeightToSection(this.articles, ruleKey, weight);
			break;
		case 3:
			this.articles = applyWeightToCategory(this.articles, ruleKey, weight);
			break;
	};

	return this.articles;
};


module.exports = ContentManager;