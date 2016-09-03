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

    // vm.projects = [
    //   {
    //     name:         "Reversi",
    //     hosted:       "http://ezraez.github.io/reversi",
    //     github:       "https://github.com/ezRAez/reversi",
    //     comment:      "The difficulty in programming Reversi is the dynamic \
    //                    nature of the game play.  A move could take anywhere \
    //                    between one and six opponent pieces in a given move.",
    //     codeImage:    "../assets/images/projects/reversi_code.png",
    //     codeComment:  "<code>searchBoard</code> compiles the surrounding \
    //                    squares' values in a given direction into a \
    //                    string, making it easy for a regex to find a \
    //                    valid move.",
    //     projectImage: "../assets/images/projects/reversi.png",
    //     techniques:   [
    //                     "Recursive Function Calls",
    //                     "Complex Logic",
    //                     "Model/View Separation",
    //                     "DOM manipulation with jQuery",
    //                     "Regex for Move Validation"
    //                   ]
    //   }
    // ];
  }
})();
