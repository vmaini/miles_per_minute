'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    function viewFolder(url) {
      return 'modules/core/views/' + url + '.client.view.html';
    }
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');

    // Home state routing
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: viewFolder('home')
      })
      .state('scores', {
        url: '/scores/',
        templateUrl: viewFolder('scores/index')
      })
      .state('over700', {
        url: '/scores/over700/',
        templateUrl: viewFolder('scores/over700/index')
      })
      .state('under700', {
        url: '/scores/under700/',
        templateUrl: viewFolder('scores/under700/index')
      })
      .state('unknown', {
        url: '/scores/unknown/',
        templateUrl: viewFolder('scores/unknown/index')
      })
      .state('domestic', {
        url: '/scores/over700/domestic/',
        templateUrl: viewFolder('scores/over700/domestic/index')
      })
      .state('international', {
        url: '/scores/over700/international/',
        templateUrl: viewFolder('scores/over700/international/index')
      });
  }
]);
