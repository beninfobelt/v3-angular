'use strict';

/*.config(function($provide) {
        $provide*/

var app = angular.module('myapp');

app.factory('dataFactory', ['$resource',
                              function($resource) {
            
            var dataFactory = {};

            dataFactory =  {
                animal: function() {
                    return 'cow';
                  },
                color: function() {
                    return 'orange';
                  },
                farmers: function() {
                    /*
                    var dataInfo = $resource('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch', {
                          zip:'60613'
                        }).get();

                    return dataInfo;
                    */

                  }
              };

            return dataFactory;
          }]);

    //});




/*
app.factory('Article', function($resource) {
    return $resource('api/articles/:keywords', {keywords: '@keywords'}, {
        query: {method:'GET', params:{}, isArray:true}
    });*/




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