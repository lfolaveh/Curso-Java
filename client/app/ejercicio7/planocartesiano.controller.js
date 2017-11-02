'use strict';
(function(){

class PlanocartesianoComponent {
  constructor() {
    this.message = 'Hello';
    console.log(this.message);
    this.planocartesiono();
  }

  planocartesiono(){
  	this.x = this.x2-this.x1;
  	this.y = this.y2-this.y1;
  	this.d = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
  	this.b = Math.sqrt(this.d);
  	console.log('test');
  }
}

angular.module('javascriptApp')
  .component('planocartesiano', {
    templateUrl: 'app/ejercicio7/planocartesiano.html',
    controller: PlanocartesianoComponent,
    contolllerAs: 'vm'
  });

})();
