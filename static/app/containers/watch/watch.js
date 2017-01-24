angular.module('SubtitleApp')
.component('watchComp', {
  templateUrl: 'app/containers/watch/watch.html',
  controller: 'WatchCompCtrl',
  controllerAs: 'watchComp'
})

function WatchCompCtrl() {
  var watchComp = this;

}

WatchCompCtrl.$inject = [];
