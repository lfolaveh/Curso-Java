'use strict';
(function(){

class PromedioComponent {
  constructor() {
    this.CalificacionP;
  }

  calificaion(){
    this.calificacionP = (this.Ca1 + this.Ca2 + this.Ca3 + this.Ca4)/4;
    console.log("Promedio");
  }
}

angular.module('javascriptApp')
  .component('promedio', {
    templateUrl: 'app/ejercicio1/promedio.html',
    controller: PromedioComponent,
    controllerAs:'vm'
  });

})();
