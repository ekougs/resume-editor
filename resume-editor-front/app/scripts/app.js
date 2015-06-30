'use strict';

/**
 * @ngdoc overview
 * @name resumeEditor
 * @description
 * # resumeEditor
 *
 * Main module of the application.
 */
(function () {
  angular
    .module('resumeEditor', [
      'ngRoute', 'ngFileUpload'
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
        .when('/themes/add', {
          templateUrl: 'views/themes/addition.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
