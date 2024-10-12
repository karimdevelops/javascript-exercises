const findTheOldest = function (arr) {
  oldstToYngst = arr.sort((a, b) => {
    return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
  });
  oldest = oldstToYngst[0];
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
