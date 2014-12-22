'use strict';

describe('Service: mvDealer', function () {

  // load the service's module
  beforeEach(module('sritry1App'));

  // instantiate service
  var mvDealer;
  beforeEach(inject(function (_mvDealer_) {
    mvDealer = _mvDealer_;
  }));

  it('should do something', function () {
    expect(!!mvDealer).toBe(true);
  });

});
