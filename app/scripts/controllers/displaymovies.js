'use strict';

/**
 * @ngdoc function
 * @name pickMeAmovieApp.controller:DisplaymoviesCtrl
 * @description
 * # DisplaymoviesCtrl
 * Controller of the pickMeAmovieApp
 */
angular.module('pickMeAmovieApp')
  .controller('DisplayMoviesCtrl', function ($scope, sharedProperties, movieFactory) {
  	var genreId = sharedProperties.getGenreId();
  	var minRating = sharedProperties.getMinRating();
  	var maxRating = sharedProperties.getMaxRating();
  	getTotalPages();

    function getTotalPages() {
		movieFactory.getTotalPages(genreId,minRating,maxRating).then(function(response){
			$scope.pages = response['total_pages'];
	});


	}
  });
