const repeatString = function (string, num) {
  let newString = "";
  for (let i = 1; i <= num; i++) {
    newString = newString.concat(string);
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
