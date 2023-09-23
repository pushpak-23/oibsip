function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const targetUnit = document.getElementById("units").value;
  let convertedTemp = 0;

  if (targetUnit === "fahrenheit") {
    convertedTemp = (inputTemp * 9) / 5 + 32;
  } else if (targetUnit === "celsius") {
    convertedTemp = ((inputTemp - 32) * 5) / 9;
  } else if (targetUnit === "kelvin") {
    convertedTemp = inputTemp + 273.15;
  }

  document.getElementById(
    "convertedTemp"
  ).innerText = `${convertedTemp} ${targetUnit}`;
}
