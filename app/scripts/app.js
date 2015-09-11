'use strict';

/**
 * @ngdoc overview
 * @name pickMeAmovieApp
 * @description
 * # pickMeAmovieApp
 *
 * Main module of the application.
 */
angular
  .module('pickMeAmovieApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/display', {
        templateUrl: 'views/displaymovies.html',
        controller: 'DisplayMoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $mdThemingProvider.theme('default');


  });
