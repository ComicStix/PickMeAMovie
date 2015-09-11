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

      function makeRequest(url, params){
        var requestUrl = baseUrl + '/' + url + '?api_key=' + apiKey;
        angular.forEach(params, function(value, key){
          requestUrl = requestUrl + '&' + key + '=' + value;
        });
        return $http({
          'url': requestUrl,
          'method': 'GET',
          'headers': {
              'Content-Type': 'application/json'
          },
          'cache': true
      }).then(function(response){
          return response.data;
      }).catch(function(response) {
        console.error('Genre retrieval error', response.status, response.data);
      });
    }

    movieFactory.getGenres = function(){
      return makeRequest('genre/movie/list',{});
    };

    movieFactory.getMoviesWithGenre = function(genre){
      return makeRequest('discover/movie',{'with_genres': genre});
    };

    return movieFactory;
    
  }]);
