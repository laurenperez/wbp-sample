const expect = require("chai").expect;
var should = require("chai").should();

// Sample Test
it("should have this property", function () {
  var myProperty = { color: "green" };
  myProperty.should.have.property("color").equal("green");
});


module.exports.confirmMerge = (data) => {
  data.some((record) => record.police_district === 9);
} //should return false if all are removed