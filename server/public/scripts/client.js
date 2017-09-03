var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      controller: 'UserController as uc',
    }).when('/', {
      templateUrl: '/views/templates/home.html',
      controller: 'HomeController as hc',
    }).when('/code', {
      templateUrl: '/views/templates/code.html',
      controller: 'CodeController as cc',
    });
});
