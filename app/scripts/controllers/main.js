'use strict';

/**
 * @ngdoc function
 * @name pickMeAmovieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pickMeAmovieApp
 */
angular.module('pickMeAmovieApp')
  .controller('MainCtrl',function ($scope,movieFactory) {

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
  });
