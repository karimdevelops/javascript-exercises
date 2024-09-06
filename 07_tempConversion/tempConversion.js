const convertToCelsius = function (temp) {
  let tempCelcius = (temp - 32) * (5 / 9);
  tempCelcius = Math.round(tempCelcius * 10) / 10;
  return tempCelcius;
};

const convertToFahrenheit = function (temp) {
  let tempFahrenheit = temp * (9 / 5) + 32;
  tempFahrenheit = Math.round(tempFahrenheit * 10) / 10;
  return tempFahrenheit;
};
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
