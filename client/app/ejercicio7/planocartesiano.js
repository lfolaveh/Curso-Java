'use strict';

angular.module('javascriptApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('planocartesiano', {
        url: '/planocartesiano',
        template: '<planocartesiano></planocartesiano>'
      });
  });
