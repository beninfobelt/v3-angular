'use strict';

var app = angular.module('auxFeatures');

app.directive('projectDetail', function () {
    return {
      restrict: 'A',
      templateUrl: '/views/partials/project-detail.html'
    };
});
