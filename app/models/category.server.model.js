'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * CategorySchema Schema
 */
var CategorySchema = new Schema({
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
	displayName: {
		type: String,
		trim: true
	},
	url: {
		type: String,
		trim: true
	},
	banner: {
		type: String
	},
	products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

mongoose.model('Category', CategorySchema);
