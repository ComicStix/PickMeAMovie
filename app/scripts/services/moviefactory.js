'use strict';

/**
 * @ngdoc service
 * @name pickMeAmovieApp.movieFactory
 * @description
 * # movieFactory
 * Factory in the pickMeAmovieApp.
 */
angular.module('pickMeAmovieApp')
  .factory('movieFactory', ['$http', function ($http) {
    var baseUrl = 'http://api.themoviedb.org/3';
    var apiKey = '10646c463753148b48abcbb790b8119c';
    var movieFactory = {};

    function makeRequest(url){
      var requestUrl = baseUrl + '/' + url + '?api_key=' + apiKey;
      return $http({
            'url': requestUrl,
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json'
            },
            'cache': true
        }).success(function(response){
            return response.data;
        }).error(function(error){
          console.log("ERROR");
          return error;
    });
    }

    movieFactory.getGenres = function(){
      return makeRequest('genre/movie/list');
    };

    return movieFactory;
    
  }]);