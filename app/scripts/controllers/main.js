'use strict';

/**
 * @ngdoc function
 * @name pickMeAmovieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pickMeAmovieApp
 */
angular.module('pickMeAmovieApp')
  .controller('MainCtrl',function ($scope,movieFactory,sharedProperties,$location) {

  	$scope.genreList = [];
  	getGenres();
  	$scope.formData = {};
  	$scope.formData.minRating = sharedProperties.getMinRating();
  	$scope.formData.maxRating = sharedProperties.getMaxRating();

  	function getGenres(){
		movieFactory.getGenres().then(function(response){
			$scope.genres = response['genres'];
			angular.forEach($scope.genres, function(value) {
	            $scope.genreList.push(value);
            });
		});
	};
	
	$scope.setGenreId = function (genreId){
		sharedProperties.setGenreId(genreId);
	};

	$scope.setMaxRating = function (rating){
		sharedProperties.setMaxRating(rating);
	};

	$scope.setMinRating = function (rating){
		sharedProperties.setMinRating(rating);
	};

	$scope.parseInt = function(i){
		return parseInt(i);
	};

	$scope.changeView = function(view){
		$location.path(view);
	};
});
