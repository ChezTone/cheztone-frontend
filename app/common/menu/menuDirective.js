/**
 * Created by Tony on 25/01/2015.
 */
'use strict';

angular.module('ctCommons').directive('ctMenu',function($location){
  return {
    restrict : 'E',
    templateUrl : 'common/menu/menu.html',
    link : function(scope,elements) {

      function updateActive(){
        _.forEach(elements.find('.navbar-nav').find('li'),function(element){
          var angularLi = angular.element(element);
          if(angularLi.find('a').attr('href') === '#' + $location.path()){
            angularLi.addClass('active');
          }else{
            angularLi.removeClass('active');
          }
        });
      }

      updateActive();

      scope.$on('$routeChangeStart', function(event, next, current) {
        updateActive();
      });

    }
  }
});
