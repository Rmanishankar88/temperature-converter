const tempInput = document.getElementById('tempInput');
const result = document.getElementById('result');
const radios = document.getElementsByName('conversion');

function convertTemperature() {
  const temp = parseFloat(tempInput.value);
  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  let conversionType;
  for (const radio of radios) {
    if (radio.checked) {
      conversionType = radio.value;
      break;
    }
  }

  let output;
  if (conversionType === "CtoF") {
    output = (temp * 9 / 5 + 32).toFixed(2) + " °F";
  } else {
    output = ((temp - 32) * 5 / 9).toFixed(2) + " °C";
  }

  result.textContent = `Converted: ${output}`;
}

// Attach event listeners
tempInput.addEventListener("input", convertTemperature);
for (const radio of radios) {
  radio.addEventListener("change", convertTemperature);
}
