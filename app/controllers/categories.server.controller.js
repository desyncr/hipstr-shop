'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	mongoose = require('mongoose'),
	Category = mongoose.model('Category');

exports.list = function(req, res) {
	Category.find().exec(function(err, categories) {
		if (err) {
			return res.status(400).send({
				message: 'Error'
			});
		} else {
			res.json(categories);
		}
	});
};

exports.read = function(req, res) {
	res.send(req.category);
};

exports.categoryName = function(req, res, next, name) {
	Category.findOne({url: name}).populate('products').exec(function(err, category) {
		if (err) return next(err);
		if (!category) return next(new Error('Failed to load category ' + name));
		req.category = category;
		next();
	});
};