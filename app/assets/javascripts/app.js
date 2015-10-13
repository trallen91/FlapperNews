// templateUrl: '/assets/templates/_home.html',

angular.module('flapperNews', ['ui.router', 'templates']);

angular.module('flapperNews').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('home', {
        url: "/home",
        templateUrl: 'home/_home.html',
        controller: 'MainCtrl',
        resolve: {
          postPromise: ['posts', function(posts){
            return posts.getAll();
          }]
        }
      });

      $stateProvider.state('posts', {
        url: '/posts/{id}',
        templateUrl: 'posts/_posts.html',
        controller: 'PostsCtrl',
        resolve: {
          post: ['$stateParams', 'posts', function($stateParams, posts){
            return posts.get($stateParams.id);
          }]
        }
      });

      $urlRouterProvider.otherwise('home');
  }])


