'use strict';

/**
 * @ngdoc service
 * @name sritry1App.test
 * @description
 * # test
 * Factory in the sritry1App.
 */
angular.module('sritry1App')
  .factory('test', function () {
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
