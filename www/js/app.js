// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var user=null;
angular.module('myApp', ['ionic',"myApp.doLogin",'content.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'login/login.html',
        controller: 'doLogin'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'content/index.html'

      })
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })

      .state('app.grxx', {
        url: '/grxx',
        views: {
          'menuContent': {
            templateUrl: 'templates/grxx.html',
            controller:'grxx'
          }
        }
      })
      .state('app.gsygxx', {
        url: '/gsygxx',
        views: {
          'menuContent': {
            templateUrl: 'templates/gsygxx.html',
            controller:'gsygxx'
          }
        }
      })

      .state('app.grewm', {
        url: '/grewm',
        views: {
          'menuContent': {
            templateUrl: 'templates/grewm.html',
            controller:'grewm'
          }
        }
      })
      .state('app.renwu', {
        url: '/renwu',
        views: {
          'menuContent': {
            templateUrl: 'templates/renwu.html',
            controller: 'renwu'

          }
        }
      })

      .state('app.renwuxq', {
        url: '/renwuxq/:rwId',
        views: {
          'menuContent': {
            templateUrl: 'templates/renwuxq.html',
            controller: 'renwuxq'

          }
        }
      });
    $urlRouterProvider.otherwise('/login');
  });
