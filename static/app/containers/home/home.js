angular.module('SubtitleApp')
.component('homeComp', {
  templateUrl: '/containers/home/home.html',
  controller: 'homeCompCtrl',
  controllerAs: 'homeComp'
});

function homeCompCtrl() {
  var homeComp = this;
}

homeCompCtrl.$inject = [];
