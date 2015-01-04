'use strict';

angular.module('ctCommons').directive('ctRoles',function(AuthService){
  return {
    restrict : 'A',
    link : function(scope,element){
      var authorized = AuthService.isAuthorized;
      element[0].style.display = authorized ? 'block' : 'none';
    }
  }
});
