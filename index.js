var sh = require('ull-shape-lucas-ivan-miguel-jairo');
var sh1 = require('ull-shape-cuadrado-lucas-ivan-miguel-jairo');




////////////////////////////////////////////////////////////////////////////



  "use strict"



   function calcula(shape, options) {

      var figura = new sh.Shape.tipo[shape](options)

      var result = figura.getArea();

      return result;

  }

module.exports = {calcula: calcula}