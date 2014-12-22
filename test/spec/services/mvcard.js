'use strict';

describe('Service: mvCard', function () {

  // load the service's module
  beforeEach(module('sritry1App'));

  // instantiate service
  var mvCard;
  beforeEach(inject(function (_mvCard_) {
    mvCard = _mvCard_;
  }));

  it('should do something', function () {
    expect(!!mvCard).toBe(true);
  });

});
