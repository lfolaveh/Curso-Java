'use strict';

describe('Component: Ejercicio9Component', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var Ejercicio9Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Ejercicio9Component = $componentController('Ejercicio9Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
