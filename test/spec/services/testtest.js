'use strict';

describe('Service: testtest', function () {

  // load the service's module
  beforeEach(module('sritry1App'));

  // instantiate service
  var testtest;
  beforeEach(inject(function (_testtest_) {
    testtest = _testtest_;
  }));

  it('should do something', function () {
    expect(!!testtest).toBe(true);
  });

});
