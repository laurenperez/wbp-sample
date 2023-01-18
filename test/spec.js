const expect = require("chai").expect;
var should = require("chai").should();

// Sample Test
it("should have this property", function () {
  var myProperty = { color: "green" };
  myProperty.should.have.property("color").equal("green");
});
