/**
 * Created by Tony on 03/01/2015.
 */
'use strict';

angular.module('ctCommons').run(function($rootScope,AuthService,USER_ROLES){
  $rootScope.authenticated = false;
  $rootScope.$on('$routeChangeStart', function (event, next) {
    $rootScope.isAuthorized = AuthService.isAuthorized;
    $rootScope.userRoles = USER_ROLES;
    AuthService.hasRole(next.access.authorizedRoles);
  });
});
