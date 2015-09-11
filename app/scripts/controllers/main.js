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

  });
