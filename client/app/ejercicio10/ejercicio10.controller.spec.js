'use strict';

describe('Component: Ejercicio10Component', function () {

  // load the controller's module
  beforeEach(module('javascriptApp'));

  var Ejercicio10Component, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    Ejercicio10Component = $componentController('Ejercicio10Component', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
