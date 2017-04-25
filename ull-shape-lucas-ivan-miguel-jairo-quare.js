"use strict"
/*
     Se require el paquete que contiene la clase Shape.
*/
var nuevo = require("ull-shape-lucas-ivan-miguel-jairo");
var Shape = nuevo.Shape;
/**
 * Clase para representar un Cuadrado que es de tipo Shape.
 *
 * @param {object} options Bloque de código.
 * @param {width} options.width Anchura de la figura.
 */
class Square extends Shape {

    constructor(options) {

      super(options)
        /* @param {function?} done Callback function to execute when finished.*/

    }


    area() {

      var area = 0;
      area = Math.pow(this.width, 2);
      return area;
    }
  }

Shape.tipo.Square = Square;
module.exports = { Square : Square};
