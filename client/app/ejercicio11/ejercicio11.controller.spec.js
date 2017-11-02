'use strict';

describe('Component: Ejercicio11Component', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var Ejercicio11Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Ejercicio11Component = $componentController('Ejercicio11Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
