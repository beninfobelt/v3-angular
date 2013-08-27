var app = angular.module('myapp');

app.controller('menuCtrl', ['$scope', 
        function ($scope) {

    $scope.status;
    $scope.customers;
    $scope.orders;

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

    //$scope.status;
    $scope.animalList = dataFactory.animal();
    $scope.colorList = dataFactory.color();

    $scope.domainGet = function() {

        $http({method: 'GET', url: 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60613', cache: $templateCache}).
            success(function(data, status) {
                $scope.domainStatus = status;
                $scope.domainData = data;
            }).
            error(function(data, status) {
                $scope.domainData = "[]";
                $scope.domainStatus = status;
            });
    };

    $scope.domainGet();
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