'use strict';

// Categories service used for communicating with the users REST endpoint
angular.module('products').factory('Categories', ['$resource',
	function($resource) {
		return $resource('categories/:id');
	}
]);