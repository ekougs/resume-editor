'use strict';

(function () {
  angular.module('resumeEditor').directive('fileUpload', function () {
    return {
      scope: {
        model: '=',
        accept: '@',
        label: '@'
      },
      templateUrl: 'views/directives/fileUpload.html'
    };
  });
})();
