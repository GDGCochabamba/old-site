(function () {

  angular
    .module('gdg.components')
    .directive('gdgVideo',gdgVideo);

  function gdgVideo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/video.html',
      scope: { },
      bindToController: {
        image: '@',
        url: '@'
      },
      controller: VideoController,
      controllerAs: 'video'
    };

    return directive;
  }

  function VideoController() { }

})();
