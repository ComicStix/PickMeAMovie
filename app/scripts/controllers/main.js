'use strict';

/**
 * @ngdoc function
 * @name pickMeAmovieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pickMeAmovieApp
 */
angular.module('pickMeAmovieApp')
  .controller('MainCtrl',function ($scope,movieFactory,sharedProperties) {

  	$scope.genreList = [];
  	getGenres();
  	$scope.minRating = 1;
  	$scope.maxRating = 5;

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

	$scope.getGenreId = function (){
		sharedProperties.getGenreId();
	};

	$scope.setMaxRating = function (rating){
		sharedProperties.setMaxRating(rating);
		$scope.maxRating = sharedProperties.getMaxRating();
		console.log(sharedProperties.getMaxRating());
	};

	$scope.getMaxRating = function (){
		sharedProperties.getMaxRating();
	};

	$scope.setMinRating = function (rating){
		sharedProperties.setMinRating(rating);
		$scope.minRating = sharedProperties.getMinRating();
		console.log(sharedProperties.getMinRating());
	};

	$scope.getMinRating = function (){
		sharedProperties.getMixRating();
	};

	

  });
