'use strict';

/**
 * @ngdoc service
 * @name pickMeAmovieApp.sharedProperties
 * @description
 * # sharedProperties
 * Service in the pickMeAmovieApp.
 */
angular.module('pickMeAmovieApp')
  .service('sharedProperties', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _genreId = null;
    var _minRating = null;
    var _maxRating = null;

    this.getGenreId = function () {
        return _genreId;
    };

    this.setGenreId = function(value) {
        _genreId = value;
    };

    this.getMinRating = function() {
    	return _minRating; 
    };

    this.setMinRating = function(rating){
    	_minRating = rating;
    };

    this.getMaxRating = function(){
    	return _maxRating;
    };

    this.setMaxRating = function(rating){
    	_maxRating = rating;
    };
});
