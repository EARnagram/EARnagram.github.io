(function() {
  "use strict";

  angular
    .module("ezra")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "/templates/home.html"
      })
      .state("about", {
        url: "/about",
        templateUrl: "/templates/about.html"
      })
      .state("projects", {
        url: "/portfolio",
        templateUrl: "/templates/projects.html"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "/templates/contact.html"
      });

    $urlRouterProvider.otherwise("/");
  }
})();
