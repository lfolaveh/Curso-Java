'use strict';

describe('Component: PrecioGalonComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var PrecioGalonComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PrecioGalonComponent = $componentController('PrecioGalonComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
