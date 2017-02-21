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
		if (article.getCategoryId() === categoryId) {
			article.weight += weight;
		}
	});
};

ContentManager.prototype.applyWeightToContent = function(ruleKey, weight) {
	// parse rule key to determine number of parts
	var ruleKeyParts = ruleKey.split('.');

	// apply weight to article, section or category depending on the number of parts in the content Id
	switch (ruleKeyParts.length) {
		case 1:
			return applyWeightToCategory(this.articles, ruleKey, weight);
		case 2:
			return applyWeightToSection(this.articles, ruleKey, weight);
		case 3:
			return applyWeightToArticle(this.articles, ruleKey, weight);
	};

	return this.articles;
};


module.exports = ContentManager;