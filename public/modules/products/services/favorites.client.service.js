'use strict';

angular.module('products').factory('Favorites', ['$rootScope', '$cookieStore',
	function($rootScope, $store) {
		var favorites = $store.get('favorites') || []
			;

		var isFavorite = function(favorite) {
			return favorites.reduce(function(present, product) {
				return present || product.url === favorite.url;
			}, false);
		};

		var normalize = function(product) {
			return {name: product.name, url: product.url};
		};

		var persist = function() {
		 	$store.put('favorites', favorites);
		};

		return {
			add: function(product) {
				var favorite = normalize(product);

				if (!isFavorite(favorite)) {
					favorites.push(favorite);

					persist();
				}

				$rootScope.$broadcast('favorites.FavoriteAdded', favorite);
			},
			remove: function(product) {
				var favorite = normalize(product);

				favorites.map(function(fav, i) {
					if (fav.url === favorite.url) {
						favorites.splice(i, 1);
						persist();
						$rootScope.$broadcast('favorites.FavoriteRemoved', favorite);	
					}
				});
			},
			toggle: function(product) {
				var favorite = normalize(product);

				isFavorite(favorite) ? this.remove(product) : this.add(product);
			},
			get: function() {
				return favorites;
			},

			isFavorite: function(product) {
				return isFavorite(product);
			},

			clear: function() {
				$store.remove();
				$rootScope.$emit('favorites.clearOut');
			}
		};
	}
]);