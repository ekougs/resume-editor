'use strict';

/**
 * @ngdoc function
 * @name resumeEditor.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the resumeEditor
 */
angular.module('resumeEditor')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
