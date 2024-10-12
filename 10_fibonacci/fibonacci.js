const fibonacci = function (x) {
  if (x < 0) return "OOPS";

  let fibarr = [];
  for (let i = 0; i <= x; i++) {
    if (fibarr.length === 0) {
      fibarr.push(0, 1);
    } else if (i > 1) {
      fibarr[i] = fibarr[i - 1] + fibarr[i - 2];
    }
  }
  return fibarr[x];
};

// Do not edit below this line
module.exports = fibonacci;
