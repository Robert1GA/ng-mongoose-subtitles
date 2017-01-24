angular.module('SubtitleApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/error');

  $stateProvider
  .state('home', {
    url: '/',
    component: 'homeComp'
  })
  .state('watch', {
    url: '/watch',
    component: 'watchComp'
  })
  .state('error', {
    url: '/views/error',
    component: 'errorComp'
  })

  $locationProvider.html5Mode(true);

}]);
