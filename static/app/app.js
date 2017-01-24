angular.module('SubtitleApp', [ui.router])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/error');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html',
    component: 'homeComp'
  })
  .state('watch', {
    url: '/watch',
    templateUrl: 'views/watch.html',
    component: 'watchComp'
  })
  .state('error', {
    url: '/error',
    templateUrl: 'views/error'
  })

  $locationProvider.html5Mode(true);

}]);
