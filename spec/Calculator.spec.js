/***
  "My Calculator"

    "sum 2 + 2 SHOULD be 4"
    "sum 2 + 2 + 3 + 1 SHOULD be 8"

    "subtraction between 2 and 2 SHOULD be 0"
    "subtraction between 3 and 4 SHOULD be -1"

    "multiplication between 3 and 2 SHOULD be 6"
    "multiplication between 3, 2 and 4 SHOULD be 24"

    "division between 2 and 2 SHOULD be 1"
    "division between 6 and 2 SHOULD be 3"
***/

describe("Calculator challenge", function() {
  var calc = require("../Calculator")

  it("sum between 2 and 2 should be 4", function() {
    expect(calc.sum(2,2)).toBe(4)
  })

  it("sum between 2, 2, 3, and 1 should be 8", function() {
    expect(calc.sum(calc.sum(2,2), calc.sum(3,1))).toBe(8)
  })

  it("subtraction between 2 and 2 should be 0", function() {
    expect(calc.sub(2,2)).toBe(0)
  })

  it("subtraction between 3 and 4 should be -1", function() {
    expect(calc.sub(3,4)).toBe(-1)
  })

  it("multiplication between 3 and 2 should be 6", function() {
    expect(calc.mult(3,2)).toBe(6)
  })

  it("multiplication between 3, 2, and 4 should be 24", function() {
    expect(calc.mult(calc.mult(3,2), 4)).toBe(24)
  })

  it("divison between 2 and 2 should be 1", function() {
    expect(calc.div(2, 2)).toBe(1)
  })

  it("divison between 6 and 2 should be 1", function() {
    expect(calc.div(6, 2)).toBe(3)
  })

  /* Extra matchers */

  // To equal

  // To match

  // To be defined & to be undefined

  // To be null

  // To be truthy & to be falsy

  // To contain

  // To be less than & to be greater than
  it("divison between 2 and 2 should be higher than 0", function() {
    expect(calc.div(2,2)).toBeGreaterThan(0)
  })

  // To throw & to throw error
})
