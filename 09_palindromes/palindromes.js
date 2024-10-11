const palindromes = function (str) {
  let arr = [...str].filter(
    (x) =>
      x != " " &&
      x != null &&
      ((x >= "a" && x <= "z") || (x >= "A" && x <= "Z") || (x >= 0 && x <= 9))
  );
  let alphaStr = arr.join("").toLowerCase();
  let alphaReversedStr = arr.reverse().join("").toLowerCase();
  return alphaStr == alphaReversedStr;
};
// Do not edit below this line
module.exports = palindromes;
