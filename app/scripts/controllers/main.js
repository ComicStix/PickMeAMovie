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
		console.log(sharedProperties.getGenreId());
	};

	$scope.setMaxRating = function (rating){
		sharedProperties.setMaxRating(rating);
		//$scope.maxRating = sharedProperties.getMaxRating();
		console.log("max: " + $scope.formData.maxRating);
		console.log("min: " + $scope.formData.minRating);
	};

	$scope.setMinRating = function (rating){
		sharedProperties.setMinRating(rating);
		//$scope.minRating = sharedProperties.getMinRating();
		console.log("min: " + $scope.formData.minRating);
		console.log("max: " + $scope.formData.maxRating);
	};

	$scope.parseInt = function(i){
		return parseInt(i);
	};

	$scope.changeView = function(view){
		$location.path(view);
	};

	

	

  });
