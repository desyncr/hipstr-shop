'use strict';

// Config HTTP Error Handling
angular.module('products').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location',
			function($q, $location) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);