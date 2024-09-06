const convertToCelsius = function (temp) {
  let tempCelcius = (temp - 32) * (5 / 9);
  return tempCelcius;
};

const convertToFahrenheit = function (temp) {
  let tempFahrenheit = temp * (9 / 5) + 32;
  return tempFahrenheit;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
