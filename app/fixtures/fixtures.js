'use strict';
/**
 * Module dependencies.
 */
var init = require('../../config/init')(),
	config = require('../../config/config'),
	mongoose = require('mongoose'),
	fixtures = require('node-mongoose-fixtures'),
	chalk = require('chalk'),
	category = require('../models/category.server.model'),
	product = require('../models/product.server.model'),
	Category = mongoose.model('Category'),
	Product = mongoose.model('Product')
	;

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

fixtures({
	Product: [
	    {
	    	name: 'First Product',
	    	url: 'a-product-1',
	    	price: 77.00,
	    	image: '/modules/products/img/catalogue/t_400_0.jpg'
	    },
	    {
	    	name: 'Second Product',
	    	url: 'a-product-2',
	    	price: 73.00,
	    	image: '/modules/products/img/catalogue/t_400_1.jpg'
	    },
	    {
	    	name: 'Thrird Product',
	    	url: 'a-product-3',
	    	price: 100.00,
	    	image: '/modules/products/img/catalogue/t_400_2.jpg'
	    },
	    {
	    	name: 'Fourth Product',
	    	url: 'a-product-4',
	    	price: 100.00,
	    	image: '/modules/products/img/catalogue/t_400_3.jpg'
	    },
	    {
	    	name: 'Fifth Product',
	    	url: 'a-product-5',
	    	price: 120.00,
	    	image: '/modules/products/img/catalogue/t_400_4.jpg'
	    },
	    {
	    	name: 'Sixth Product',
	    	url: 'a-product-6',
	    	price: 20.00,
	    	image: '/modules/products/img/catalogue/t_400_5.jpg'
	    }
	]
}, mongoose, function(err, data) {
	var categories = [{
			name: 'Summer',
			description: 'Check out the lastest tendences for this summer',
			url: 'summer',
			banner: '/modules/products/img/categories/1.jpg'
		},
		{
			name: 'Women',
			description: 'Tendencies for women',
			url: 'women',
			banner: '/modules/products/img/categories/2.jpg'
		},
		{
			name: 'Exclusive',
			description: 'Exclusive brands',
			url: 'exclusive',
			banner: '/modules/products/img/categories/3.jpg'
		},
		{
			name: 'Premium',
			description: 'Even more exclusive',
			url: 'premium',
			banner: '/modules/products/img/categories/4.jpg'
		},
	];
	categories.forEach(function(category) {
		category = new Category(category);
		category.products.push(data[0]);
		category.products.push(data[1]);
		category.products.push(data[2]);
		category.products.push(data[3]);
		category.products.push(data[4]);
		category.products.push(data[5]);

		category.save(function() {
			process.exit();
		});
	});
});
