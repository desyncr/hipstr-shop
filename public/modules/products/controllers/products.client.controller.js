'use strict';

angular.module('products').controller('ProductsController', ['$rootScope', '$scope', '$stateParams', '$location', 'Products', 'Favorites',
	function($rootScope, $scope, $stateParams, $location, products, favorites) {

		$scope.find = function() {
			$scope.products = products.query();
		};

		$scope.findOne = function() {
			$scope.product = products.get({id: $stateParams.productName}, function() {
				$scope.product.isFavorite = favorites.isFavorite($scope.product);
			});
		};

		$scope.favorite = function(product) {
			favorites.toggle(product);
		};

		$scope.$on('favorites.FavoriteAdded', function(favorite) {
			$scope.product.isFavorite = favorites.isFavorite($scope.product);
		});
		
		$scope.$on('favorites.FavoriteRemoved', function(favorite) {
			$scope.product.isFavorite = favorites.isFavorite($scope.product);
		});
	}
]);