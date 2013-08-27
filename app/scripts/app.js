'use strict';

var app = angular.module('myapp', ['ui.state', 'restangular']);

app.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home');
 
  $stateProvider
      .state('template', {
            url: "/home",
            templateUrl: "/views/partials/template.html"
        })
      .state('route1', {
            parent: 'template',
            url: "/route1",
            templateUrl: "/views/partials/route1.html",
            controller: 'menuCtrl'
        })
      .state('people', {
            parent: 'template',
            url: "/people",
            templateUrl: "/views/partials/people.html",
            controller: 'peopleCtrl'
        });

});


app.config(function(RestangularProvider) {

  RestangularProvider.setBaseUrl('http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=60613');
  /*
  RestangularProvider.setDefaultRequestParams(
      { 
        consumerKey: 'p9mg5wHtptEZ03QMDVjBDA',
        consumerSecret : 'YTvVA97YRCYNcpltB2yS2FgICy53U9XjoIWOY2tFdo',
        credentials : Base64.encode(consumerKey + ':' + consumerSecret)
      });
  RestangularProvider.setRestangularFields({ id: '_id.$oid' });

  RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        
    if (operation === 'put') {
      elem._id = undefined;
      return elem;
    }
    
    return elem;

  })
  */

});
  