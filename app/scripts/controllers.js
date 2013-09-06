'use strict';

var app = angular.module('myapp');

app.controller('menuCtrl', ['$scope',
        function ($scope) {

    $scope.menuItems = [
      'roles',
      'attributeInstance',
      'repositoty',
      'metadataTemplates',
      'permissions',
      'users',
      'domains',
      'projects',
      'retentionPolicies',
      'channels',
      'auditLogProperties',
      'auditLogs',
      'taskLogs',
      'attributeDefinitions',
      'tasks'
    ];

  }]);


app.controller('peopleCtrl', ['$scope', 'dataFactory', '$http', '$templateCache',
        function ($scope, dataFactory, $http, $templateCache) {

    $scope.peopleList = [
      'Matt',
      'Philip',
      'Stefanie',
      'Srini',
      'Josh',
      'Joe',
      'Amanda',
      'Adam',
      'Jennifer'
    ];

    $scope.hello = 'smart';

    
    $scope.animalList = dataFactory.animal();
    $scope.colorList = dataFactory.color();

    $scope.domains = [];

    $scope.status = '';

    //$scope.domainData = dataFactory.farmers().get();


    $http({method: 'GET', url: 'http://api.linkedin.com/v1/people/~6646437?format=json', cache: $templateCache}).
            success(function(data, status) {
                $scope.status = status;
                $scope.domains = data;
              }).
            error(function(data, status) {
                $scope.domains = '[]';
                $scope.status = status;
              });


/*
    $scope.foo = myService.getFoo();
    dataFactory.farmers().then(function(data) {
       //this will execute when the 
       //AJAX call completes.
       $scope.farmerList = data;
   });

    /*
    getCustomers();

    function getCustomers() {
        dataFactory.getProjects()
            .success(function (custs) {
                $scope.thedataList = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load datalist data: ' + error.message;
            });
    }*/

  }]);


/*

function domainController($scope,$http,$templateCache) {

    $scope.get = function() {

        $http({method: 'GET', url: '/family', cache: $templateCache}).
            success(function(data, status) {
                $scope.status = status;
                $scope.data = data;
            }).
            error(function(data, status) {
                $scope.data = "Request failed";
                $scope.status = status;
            });
    };

    $scope.post = function() {

        var domain = {
            name: $scope.name,
            host: $scope.host,
            port: $scope.port
        };

        $http({method: 'POST', url: '/family', data: domain, cache: $templateCache}).
            success(function(data, status) {
        
        $scope.status = status;
                $scope.data = data;
            }).
            error(function(data, status) {
                $scope.data = "Request failed";
                $scope.status = status;
            });
    };

};


*/