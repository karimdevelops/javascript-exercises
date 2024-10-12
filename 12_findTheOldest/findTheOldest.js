const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();
  let oldstToYngst = arr.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = currentYear;
    if (!b.yearOfDeath) b.yearOfDeath = currentYear;
    return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
  });
  let oldest = oldstToYngst[0];
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
