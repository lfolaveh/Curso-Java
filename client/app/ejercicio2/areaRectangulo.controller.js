'use strict';
(function(){

class AreaRectanguloComponent {
  constructor() {
  }

  areaRectangulo(){
    this.area = (this.areaA * this.areaB);
    console.log("Area");
  }
}

angular.module('javascriptApp')
  .component('areaRectangulo', {
    templateUrl: 'app/ejercicio2/areaRectangulo.html',
    controller: AreaRectanguloComponent,
    controllerAs:'vm'
  });

})();
