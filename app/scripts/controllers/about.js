'use strict';

/**
 * @ngdoc function
 * @name cheztoneFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cheztoneFrontendApp
 */
angular.module('cheztoneFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
