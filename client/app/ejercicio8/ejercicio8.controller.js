'use strict';
(function(){

class Ejercicio8Component {
  constructor() {
    this.message = 'Hello';
  }

  calcularSueldo(){
  	this.ss = this.ht*this.ph;
  }
}

angular.module('javascriptApp')
  .component('ejercicio8', {
    templateUrl: 'app/ejercicio8/ejercicio8.html',
    controller: Ejercicio8Component,
    controllerAs:'vm'
  });

})();
