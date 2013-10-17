'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope',
        function ($scope) {

    $scope.menuItems = [
      'dashboard',
      'projects',
      'explore',
      'governance',
      'settings'
    ];

    $scope.sessionItems = [
      'Account',
      'Logout'
    ];

    $scope.footerItems = [
      '© InfoBelt, LLC',
      'Contact'
    ];

    $scope.sidebarState = true;

    $scope.helpState = false;

  }]);