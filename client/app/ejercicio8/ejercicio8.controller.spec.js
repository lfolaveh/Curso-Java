'use strict';

describe('Component: Ejercicio8Component', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var Ejercicio8Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Ejercicio8Component = $componentController('Ejercicio8Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
