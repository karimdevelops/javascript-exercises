const sumAll = function (startInt, stopInt) {
  let start = startInt < stopInt ? startInt : stopInt;
  let stop = stopInt > startInt ? stopInt : startInt;
  let total = 0;
  for (let i = start; i <= stop; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
