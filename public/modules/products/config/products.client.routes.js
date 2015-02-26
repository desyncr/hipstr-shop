'use strict';

// Setting up route
angular.module('products').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/products/views/products-home.client.view.html'
		}).
		state('category', {
			url: '/category/:categoryName',
			templateUrl: 'modules/products/views/categories/list.client.view.html'
		}).
		state('product', {
			url: '/product/:productName',
			templateUrl: 'modules/products/views/products/product.client.view.html'
		});
	}
]);