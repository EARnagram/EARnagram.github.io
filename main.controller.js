(function() {
  'use strict';

  angular
    .module('ezra')
    .controller('MainController', MainController);

  MainController.$inject = [];

  function MainController() {
    var vm = this;

    vm.buttonShow = true;

    vm.toggle = function() {
      $('.ui.sidebar').sidebar('toggle');
    }
  }
})();
