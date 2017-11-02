'use strict';
(function(){

class Ejercicio9Component {
  constructor() {
    this.message = 'Hello';
  }

  calcularAlberca(){
  	this.v = (this.a*this.l*this.n);
  	this.pag = this.v*this.cm;
  	console.log(this.pag);
  }
}

angular.module('javascriptApp')
  .component('ejercicio9', {
    templateUrl: 'app/ejercicio9/ejercicio9.html',
    controller: Ejercicio9Component,
    controllerAs:'vm'
  });

})();
