'use strict';

/**
 * @ngdoc overview
 * @name sritry1App
 * @description
 * # sritry1App
 *
 * Main module of the application.
 */
angular
  .module('sritry1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'ngPlayingCards',
    'ngLodash'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Game', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
