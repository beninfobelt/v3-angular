'use strict';

var app = angular.module('auxFeatures');

app.directive('projectDetail', function () {
    return {
      restrict: 'A',
      replace: false,
      transclude: true,
      // data - - - do you want everything delivered 
      // when project is collapsed or one tab at a time?
      //scope: true,
      //controller: 'projectDetailCtrl', 
      scope: true,
      controller: function($scope) {

          /* To later use ng-repeat instead
          $scope.tablist = ['discovered', 'archived', 'expired', 'destroyed', 'configuration'];
          $scope.selection = $scope.tablist[4];
          */
          
          $scope.tabs = ['files', 'edit', 'meta'];
          $scope.selection = $scope.tabs[2];
          $scope.collapseIsClosed = false;
          $scope.changeCollapseState = function() {
              $scope.collapseIsClosed = !$scope.collapseIsClosed;
          }

      },
      templateUrl: '/views/partials/project-detail.html'
    };
});
