(function() {
  "use strict";

  angular
    .module("ezra")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "templates/home.html"
      });

    $urlRouterProvider.otherwise("/");
  }

})();
