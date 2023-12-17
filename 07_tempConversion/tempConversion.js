const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9;
  return Math.round(celsius * 10) / 10;
};
console.log(convertToCelsius(100))

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5 + 32);
  return Math.round(fahrenheit * 10) / 10;
};
console.log(convertToFahrenheit(0))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

convertToCelsius
✓ works (12 ms)
✓ rounds to 1 decimal (1 ms)
✓ works with negatives (2 ms)
convertToFahrenheit
✓ works (1 ms)
✓ rounds to 1 decimal (2 ms)
✓ works with negatives (2 ms)