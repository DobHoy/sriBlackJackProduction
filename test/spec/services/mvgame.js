'use strict';

describe('Service: mvGame', function () {

  // load the service's module
  beforeEach(module('sritry1App'));

  // instantiate service
  var mvGame;
  beforeEach(inject(function (_mvGame_) {
    mvGame = _mvGame_;
  }));

  it('should do something', function () {
    expect(!!mvGame).toBe(true);
  });

});
