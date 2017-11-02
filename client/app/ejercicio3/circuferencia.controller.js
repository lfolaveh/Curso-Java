'use strict';
(function(){

class CircuferenciaComponent {
  constructor() {
    this.pi = 3.1416;
  }

  calcularCircuferencia(){
    this.circuferencia = (this.pi * this.radio * this.radio);
  }
}

angular.module('javascriptApp')
  .component('circuferencia', {
    templateUrl: 'app/ejercicio3/circuferencia.html',
    controller: CircuferenciaComponent,
    controllerAs:'vm'
  });

})();
