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

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let facNums = [];
  for (let i = 1; i <= x; i++) {
    facNums.push(i);
  }
  return facNums.reduce((total, current) => total * current, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
