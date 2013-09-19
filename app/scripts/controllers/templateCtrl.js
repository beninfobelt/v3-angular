'use strict';

var app = angular.module('myapp');

app.controller('templateCtrl', ['$scope',
        function ($scope) {

    $scope.menuItems = [
      'Dashboard',
      'Explore',
      'Create',
      'Projects',
      'Admin'
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

  }]);