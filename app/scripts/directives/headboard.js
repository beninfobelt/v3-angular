'use strict';

var app = angular.module('auxFeatures');

app.directive('headBoard', function () {
    return {
      restrict: 'A',
      transclude: true,
      scope: { status:'=ssStatus' },
      templateUrl: '/views/partials/headboard.html'
    };
});

    