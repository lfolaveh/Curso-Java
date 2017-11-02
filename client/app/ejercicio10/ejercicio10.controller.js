'use strict';
(function(){

class Ejercicio10Component {
  constructor() {
    
  }

  posiNega(){
  	if (this.num >= 0) {
  		this.num= "POSITIVO"
  	} else {
  		this.num= "NEGATIVO"
  	}
  }
}

angular.module('javascriptApp')
  .component('ejercicio10', {
    templateUrl: 'app/ejercicio10/ejercicio10.html',
    controller: Ejercicio10Component,
    controllerAs:'vm'
  });

})();
