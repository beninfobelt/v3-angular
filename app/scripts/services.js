'use strict';

/*.config(function($provide) {
        $provide*/

angular.module('myapp')
    .factory('dataFactory', ['$http',
                              function($http) {
            
            var urlBase = 'http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60613';
            var dataFactory = {};

            dataFactory.getStuff = function () {
                return $http.get(urlBase);
            };

            dataFactory =  {
                animal: function() {
                    return "cow"
                },
                color: function() {
                    return "orange"
                },
                farmers: function() {
/*
                    function() {
                       return $http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60613')
                       .then(function(result) { 
                            return result.data; 
                        });
                    }*/

                },
                getProjects: function() {

                    return $resource('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60613');

                },
                saveProjects: function() {

                    Restangular.all('projects').post($scope.project).then(function(project) {
                      $location.path('/edit/' + project._id.$oid);
                    });

                }
            };

            return dataFactory;
        }]);

    //});

/*
angular.module('myapp', [])
  .factory('Books', ['$http', function($http){
    return{
      get: function(callback){
          $http.get('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60613').success(function(data) {
          // prepare data here
          callback(data);
        });
      }
    };
  }]);*/




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












/*
                $http({method: 'GET', url: '/family', cache: $templateCache}).
                    success(function(data, status) {
                        $scope.status = status;
                        $scope.data = data;
                    }).
                    error(function(data, status) {
                        $scope.data = "Request failed";
                        $scope.status = status;
                    });*/
                //var temp;

                /*$http({method: 'GET', 
                      url: 'https://infobelt.atlassian.net/rest/api/2/project', 
                      cache: $templateCache}).
                            
                $http.get('https://infobelt.atlassian.net/rest/api/2/project').
                            success(function(data) {
                                temp = data;
                            })

                return temp;*/