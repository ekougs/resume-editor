'use strict';

(function () {
  var defaultTheme = {
    cssLibrary: 'none'
  };
  var themeAdditionCtrl = function($scope) {
    $scope.currentTheme = defaultTheme;
    $scope.addTheme = function() {
      $scope.themes = $scope.themes ? $scope.themes : [];
      $scope.themes.push($scope.currentTheme);
      $scope.currentTheme = defaultTheme;
    };

    $scope.isFormValid = function() {
      return $scope.currentThemeForm.$valid && $scope.currentTheme.file && $scope.currentTheme.file.length >= 1;
    };
  };

  themeAdditionCtrl.$inject = ['$scope'];
  angular.module('resumeEditor').controller('ThemeAdditionCtrl', themeAdditionCtrl);

})();
