'use strict';

/**
 * Module dependencies.
 */
var categories = require('../../app/controllers/categories.server.controller');

module.exports = function(app) {
	// Categories Routes
	app.route('/categories')
		.get(categories.list);

	app.route('/categories/:categoryName')
		.get(categories.read);

	// Finish by binding the article middleware
	app.param('categoryName', categories.categoryName);
};