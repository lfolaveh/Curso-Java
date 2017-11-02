'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ejercicio9', {
        url: '/ejercicio9',
        template: '<ejercicio-9></ejercicio-9>'
      });
  });
