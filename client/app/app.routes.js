(function(){
  angular
    .module('gdg.routes', ['ngRoute'])
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html'
      })
      .when('/eventos', {
        templateUrl: 'app/events/events.html'
      })
      .when('/videos', {
        templateUrl: 'app/videos/videos.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }
})();


// .when('/eventos', {
//     templateUrl: 'assets/templates/pages/otro.html',
//     controller: 'AvengersController',
//     controllerAs: 'vm',
//     resolve: {
//         moviesPrepService: moviesPrepService
//     }
// })
