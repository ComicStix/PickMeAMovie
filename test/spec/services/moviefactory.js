'use strict';

describe('Service: movieFactory', function () {

  // load the service's module
  beforeEach(module('pickMeAmovieApp'));

  // instantiate service
  var movieFactory;
  beforeEach(inject(function (_movieFactory_) {
    movieFactory = _movieFactory_;
  }));

  it('should do something', function () {
    expect(!!movieFactory).toBe(true);
  });

});
