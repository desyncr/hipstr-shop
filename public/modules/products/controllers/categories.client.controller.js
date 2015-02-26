'use strict';

angular.module('products').controller('CategoriesController', ['$rootScope', '$scope', '$stateParams', '$location', 'Categories', 'Favorites',
	function($rootScope, $scope, $stateParams, $location, categories, favorites) {

		var favoriteProducts = function() {
			$scope.category.products.forEach(function(product) {
				product.isFavorite = favorites.isFavorite(product);
			});	
		}

		$scope.find = function() {
			$scope.categories = categories.query();
		};

		$scope.findOne = function() {
			$scope.category = categories.get({id: $stateParams.categoryName}, function() {
				favoriteProducts()
			});
		};

		$scope.favorite = function(product) {
			favorites.toggle(product);
		};

		$scope.$on('favorites.FavoriteAdded', function(favorite) {
			favoriteProducts();
		});
		
		$scope.$on('favorites.FavoriteRemoved', function(favorite) {
			favoriteProducts();
		});
	}
]);