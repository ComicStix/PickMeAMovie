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
  .constant('API_KEY', '10646c463753148b48abcbb790b8119c')
  .constant('BASE_URL', 'http://api.themoviedb.org/3')
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $mdThemingProvider.theme('default');


  });
