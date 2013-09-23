'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope',
        function ($scope) {

    $scope.menuItems = [
      'dashboard',
      'explore',
      'create',
      'projects',
      'admin'
    ];

    $scope.sessionItems = [
      'Account',
      'Logout'
    ];

    $scope.footerItems = [
      'InfoBelt Website',
      'Contact',
      'Help'
    ];

    $scope.sidebarState = true;

  }]);