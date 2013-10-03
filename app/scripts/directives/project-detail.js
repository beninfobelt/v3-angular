'use strict';

var app = angular.module('auxFeatures');

app.directive('projectDetail', function () {
    return {
      restrict: 'A',
      replace: true,
      templateUrl: '/views/partials/project-detail.html'
    };
});
