function Calculator() {}

Calculator.sum = function(x, y) {
  return x + y
}

Calculator.sub = function(x, y) {
  return x - y
}

Calculator.mult = function(x, y) {
  return x*y
}

Calculator.div = function(x, y) {
  if (y === 0)
    return
  return x/y
}

module.exports = Calculator
