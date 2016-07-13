(function() {
  'use strict';

  angular
    .module('ezra')
    .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController() {
    var vm = this;

    vm.toggle = function() {
      $('.ui.sidebar').sidebar('toggle');
    }
  }
})();
