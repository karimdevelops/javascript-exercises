const reverseString = function (text) {
  let reverseText = "";
  textArray = text.split("");
  textLength = textArray.length;
  for (let i = textLength - 1; i >= 0; i--) {
    reverseText += textArray[i];
  }
  return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
