'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * ProductSchema Schema
 */
var ProductSchema = new Schema({
	name: {
		type: String,
		trim: true,
		default: ''
	},
	description: {
		type: String,
		trim: true,
		default: ''
	},
	price: {
		type: String,
		trim: true
	},
	url: {
		type: String,
		trim: true
	},
	image: {
		type: String
	}
});

mongoose.model('Product', ProductSchema);
