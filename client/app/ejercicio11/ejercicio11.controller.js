'use strict';
(function(){

class Ejercicio11Component {
  constructor() {
    this.message = 'Hello';
  }

  adquirirTraje(){
  	if (this.ct > 2500) {
  		this.de = this.ct*0.15;
  	} else {
  		this.de = this.ct*0.8;
  	}

  	this.pf = this.ct-this.de;
  }
}

angular.module('javascriptApp')
  .component('ejercicio11', {
    templateUrl: 'app/ejercicio11/ejercicio11.html',
    controller: Ejercicio11Component,
    controllerAs:'vm'
  });

})();
