(function () {

  angular
    .module('gdg.components')
    .directive('gdgCard',gdgCard);

  function gdgCard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/card.html',
      scope: { },
      bindToController: {
        title: '@',
        date: '@',
        image: '@',
        url: '@'
      },
      controller: CardController,
      controllerAs: 'card'
    };

    return directive;
  }

  function CardController() { }

})();
