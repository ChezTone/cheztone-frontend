'use strict';

/**
 * @ngdoc function
 * @name cheztoneFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cheztoneFrontendApp
 */
angular.module('cheztoneFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
