'use strict';

// Products service used for communicating with the users REST endpoint
angular.module('products').factory('Products', ['$resource',
	function($resource) {
		return $resource('products/:id');
	}
]);