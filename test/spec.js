const expect = require("chai").expect;
const rewire = require("rewire");
const functions = rewire("../module/index.js")
const testSets = rewire("./test-sets.js")


describe("Exercise 1 - remove duplicates", () => {
  const noDuplicates = functions.__get__("removeDuplicateRecords");
  const testData = testSets.__get__("raw");
  const expected = testSets.__get__("noDupes");
 
  it("function should exist", () => {
    expect(noDuplicates).to.be.a("function");
  });

  it("should remove all duplicate records", () => {
    expect(noDuplicates(testData)).to.deep.equal(expected);
  });
});

describe("Exercise 2 - update police district", () => {
  const updateDistrict = functions.__get__("updatedPoliceDistrict");
  const testData = testSets.__get__("raw");
  const expected = testSets.__get__("updateDistrict");
  
  it("function should exist", () => {
    expect(updateDistrict).to.be.a("function");
  });

  it("should update all districts 9 to 12", () => {
    expect(updateDistrict(testData)).to.deep.equal(expected);
  });
});

describe("Exercise 3 - extract location data", () => {
  const extractLocationData = functions.__get__("extractLocationData");
  const testData = testSets.__get__("raw");
  const expected = testSets.__get__("locationData")

  it("function should exist", () => {
    expect(extractLocationData).to.be.a("function");
  });

  it("should be condensed to location data only", () => {
    expect(extractLocationData(testData)).to.deep.equal(expected)
  });
});

describe("Exercise 4 - find by id", () => {
  const findById = functions.__get__("findById");
  const testData = testSets.__get__("raw");
  const expected = testSets.__get__("findById");

  it("function should exist", () => {
    expect(findById).to.be.a("function");
  });

  it("should return one record by id", () => {
    expect(findById(testData, "18-03387641")).to.deep.equal(expected);
  });
});

describe("Exercise 5 - number by zip", () => {
  const numberByZip = functions.__get__("numberByZip");
  const testData = testSets.__get__("raw");
  const expected = testSets.__get__("numberByZip");

  it("function should exist", () => {
    expect(numberByZip).to.be.a("function");
  });

  it("should return an object of zips with their count", () => {
    expect(numberByZip(testData)).to.deep.equal(expected);
  });
});