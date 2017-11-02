'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ejercicio10', {
        url: '/ejercicio10',
        template: '<ejercicio-10></ejercicio-10>'
      });
  });
