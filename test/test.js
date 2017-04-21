var cuadrado = require("../ull-shape-lucas-ivan-miguel-jairo-quare.js");
var Square = cuadrado.Square

describe("Cálculo de áreas", function() {
  it("must compute the square area correctly", function() {
    var result = new Square({ width:10}).area();
    result.should.be.equal(100)
})
    it("must compute the square area not correctly", function() {
    var result = new Square({ width:10}).area();
    result.should.be.not.equal(10)
})
});