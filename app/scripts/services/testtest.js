'use strict';

/**
 * @ngdoc service
 * @name sritry1App.testtest
 * @description
 * # testtest
 * Factory in the sritry1App.
 */
angular.module('sritry1App')
  .factory('testtest', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
