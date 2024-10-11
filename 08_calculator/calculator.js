const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (operands) {
  return operands.reduce((total, current) => (total += current), 0);
};

const multiply = function (operands) {
  return operands.reduce((total, current) => total * current, 1);
};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
