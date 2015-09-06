'use strict';

/**
 * @ngdoc function
 * @name pickMeAmovieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pickMeAmovieApp
 */
angular.module('pickMeAmovieApp')
  .controller('MainCtrl',['$scope','movieFactory', function ($scope,movieFactory) {


  	getGenres();
  	function getGenres() {
        movieFactory.getGenres()
            .success(function (genres) {
                $scope.genres = genres['genres'];
            
                angular.forEach($scope.genres, function(value, key) {
                	angular.forEach(value, function(value, key) {
  				console.log(key + ': ' + value);
  				
			  });
  				
			  });
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

    

 
    
  }]);
