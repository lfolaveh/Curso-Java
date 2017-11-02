'use strict';
(function(){

class PrecioGalonComponent {
  constructor() {
    this.message = 'Hello';
  }

  calcularPrecio(){
  	this.tg = (this.l/3.785);
  	this.ga = this.pg*this.tg;
  }
}

angular.module('javascriptApp')
  .component('precioGalon', {
    templateUrl: 'app/ejercicio6/precioGalon.html',
    controller: PrecioGalonComponent,
    controllerAs:'vm'
  });

})();
