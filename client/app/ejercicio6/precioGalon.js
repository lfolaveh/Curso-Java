'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('precioGalon', {
        url: '/precioGalon',
        template: '<precio-galon></precio-galon>'
      });
  });
