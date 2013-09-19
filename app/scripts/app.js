'use strict';

var app = angular.module('myapp', ['ui.state', 'ngResource', 'auxFeatures']);

app.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home/dashboard');
 
  $stateProvider
      .state('template', {
    url: '/home',
    templateUrl: '/views/partials/template.html',
    controller: 'templateCtrl'
  })
      .state('dashboard', {
    parent: 'template',
    url: '/dashboard',
    templateUrl: '/views/partials/dashboard.html',
    controller: 'playCtrl'
  })
      .state('explore', {
    parent: 'template',
    url: '/explore',
    templateUrl: '/views/partials/explore.html',
    controller: 'peopleCtrl'
  })
      .state('create', {
    parent: 'template',
    url: '/create',
    templateUrl: '/views/partials/create.html'
  })
      .state('projects', {
    parent: 'template',
    url: '/projects',
    templateUrl: '/views/partials/projects.html'
  })
      .state('admin', {
    parent: 'template',
    url: '/admin',
    templateUrl: '/views/partials/admin.html'
  });

});

