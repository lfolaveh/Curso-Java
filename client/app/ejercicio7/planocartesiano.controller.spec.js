'use strict';

describe('Component: PlanocartesianoComponent', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var PlanocartesianoComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    PlanocartesianoComponent = $componentController('PlanocartesianoComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
