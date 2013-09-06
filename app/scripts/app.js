'use strict';

var app = angular.module('myapp', ['ui.state', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home');
 
  $stateProvider
      .state('template', {
    url: '/home',
    templateUrl: '/views/partials/template.html'
  })
      .state('route1', {
    parent: 'template',
    url: '/route1',
    templateUrl: '/views/partials/route1.html',
    controller: 'menuCtrl'
  })
      .state('people', {
    parent: 'template',
    url: '/people',
    templateUrl: '/views/partials/people.html',
    controller: 'peopleCtrl'
  });

});

