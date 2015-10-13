// templateUrl: '/assets/templates/_home.html',

angular.module('flapperNews', ['ui.router', 'templates']);

angular.module('flapperNews').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: "/home",
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl'
      });

      $stateProvider.state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl'
      });

      $urlRouterProvider.otherwise('home');
  }])


