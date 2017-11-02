'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ejercicio8', {
        url: '/ejercicio8',
        template: '<ejercicio-8></ejercicio-8>'
      });
  });
