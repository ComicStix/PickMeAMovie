'use strict';

/**
 * @ngdoc function
 * @name pickMeAmovieApp.controller:DisplaymoviesCtrl
 * @description
 * # DisplaymoviesCtrl
 * Controller of the pickMeAmovieApp
 */
angular.module('pickMeAmovieApp')
  .controller('DisplayMoviesCtrl', function ($scope) {
    $scope.getMoviesWithGenre = function(genre_id) {
		movieFactory.getMoviesWithGenre(genre_id)

	};
  });
