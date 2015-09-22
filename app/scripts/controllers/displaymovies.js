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
  	$scope.test = {};
 

  	$scope.$on('$viewContentLoaded', function() {
    	getTotalPages();
	});

  	function getTotalPages(){
		movieFactory.fetchMovies(genreId,minRating,maxRating,1000).then(function(response){
			$scope.pages = response['total_pages'];
			getRandomPage();
	})};

	function getRandomPage(){
		$scope.randomPage = Math.floor((Math.random() * $scope.pages) + 1);
		fetchMovies();
	};

	function fetchMovies(){
		movieFactory.fetchMovies(genreId,minRating,maxRating,$scope.randomPage).then(function(response){
			$scope.movieList = response;
		});
	};
});
	
