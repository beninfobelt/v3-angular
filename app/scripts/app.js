'use strict';

var app = angular.module('myapp', ['ui.state', 'ngResource', 'auxFeatures', 'angularSmoothscroll']);

app.config(function($stateProvider, $urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home/dashboard');
 
  $stateProvider
      .state('template', {
    abstract: true,
    url: '/home',
    templateUrl: '/views/partials/template.html',
    controller: 'templateCtrl'
  })
      .state('dashboard', {
    parent: 'template',
    url: '/dashboard',
    views: {
      "content": {
        templateUrl: '/views/partials/dashboard.html',
        controller: 'playCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/feed.html',
        controller: 'playCtrl'
      }
    }
  })
      .state('explore', {
    parent: 'template',
    url: '/explore',
    views: {
      "content": {
        templateUrl: '/views/partials/explore.html',
        controller: 'peopleCtrl'
      },
      "sidebar": {
        templateUrl: '/views/partials/feed.html',
        controller: 'peopleCtrl'
      }
    }
  })
      .state('create', {
    parent: 'template',
    url: '/create',
    templateUrl: '/views/partials/create.html',
    views: {
      "content": {
        templateUrl: '/views/partials/create.html'
      },
      "sidebar": {
        templateUrl: '/views/partials/feed.html'
      }
    }
  })
      .state('projects', {
    parent: 'template',
    url: '/projects',
    views: {
      "content": {
        templateUrl: '/views/partials/projects.html'
      },
      "sidebar": {
        templateUrl: '/views/partials/feed.html'
      }
    }
  })
      .state('admin', {
    parent: 'template',
    url: '/admin',
    views: {
      "content": {
        templateUrl: '/views/partials/admin.html'
      },
      "sidebar": {
        templateUrl: '/views/partials/feed.html'
      }
    }
  });

});

