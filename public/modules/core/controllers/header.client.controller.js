'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Menus', 'Favorites',
	function($scope, Menus, favorites) {
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');
		var getFavorites = function() {
			$scope.favorites = favorites.get();
			$scope.favoritesCount = $scope.favorites.length;
		}
		
		getFavorites();

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		$scope.back = function(e) {
			window.history.back();
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});

		$scope.$on('favorites.FavoriteAdded', function() {
			getFavorites();
		});
		
		$scope.$on('favorites.FavoriteRemoved', function() {
			getFavorites();
		});
	}
]);