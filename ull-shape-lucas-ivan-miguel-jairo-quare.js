"use strict"
var nuevo = require("ull-shape-lucas-ivan-miguel-jairo");
var Shape = nuevo.Shape;
class Square extends Shape {

    constructor(options) {

      super(options)

    }


    area() {

      var area = 0;
      area = Math.pow(this.width, 2);
      return area;
    }
  }

Shape.tipo.Square = Square;
module.exports = { Square : Square};
