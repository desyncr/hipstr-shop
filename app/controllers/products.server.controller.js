'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	mongoose = require('mongoose'),
	Product = mongoose.model('Product')
	;

exports.read = function(req, res) {
	res.send(req.product);
};

exports.productByName = function(req, res, next, name) {
	Product.findOne({url: name}).exec(function(err, product) {
		if (err) return next(err);
		if (!product) return next(new Error('Failed to load product ' + name));
		req.product = product;
		next();
	});
};