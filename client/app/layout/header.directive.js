(function(){
  angular
    .module('gdg.layout',[])
    .directive('gdgHeader',gdgHeader);

  function gdgHeader () {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/layout/header.html'
    };
    return directive;
  }
})();
