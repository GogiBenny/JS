function convertToFahrenheit(celsius) {
  const result = (celsius * 9 / 5) + 32;
  console.log(result);
}
convertToFahrenheit(25);

function convertToCelsius(fahrenheit) {
  const result = (fahrenheit - 32) * 5 / 9;
  console.log(result);
}
convertToCelsius(86);

function convertTemperature(degrees, unit) {
  if (unit == /f/i) {
    convertToCelsius(degrees);
  } else {
    convertToFahrenheit(degrees);
  }
}
convertTemperature(25, 'C');
convertTemperature(86, 'F');
