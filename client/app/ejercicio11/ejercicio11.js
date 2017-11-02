'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ejercicio11', {
        url: '/ejercicio11',
        template: '<ejercicio-11></ejercicio-11>'
      });
  });
