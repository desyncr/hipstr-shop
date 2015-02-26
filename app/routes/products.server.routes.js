'use strict';

/**
 * Module dependencies.
 */
var products = require('../../app/controllers/products.server.controller');

module.exports = function(app) {
	// Products Routes
	app.route('/products/:productName')
		.get(products.read);

	// Finish by binding the article middleware
	app.param('productName', products.productByName);
};