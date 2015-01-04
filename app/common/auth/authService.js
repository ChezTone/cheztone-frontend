'use strict';

angular.module('ctCommons').service('AuthService',function(){
  return {
    isAuthorized : function(){
      return true;
    },
    hasRole : function(){

    }
  }
});
