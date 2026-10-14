const form = document.getElementById("calculator-form");
const leftInput = document.getElementById("left");
const rightInput = document.getElementById("right");
const operatorSelect = document.getElementById("operator");

function isValidNumber(value) {
 
  if (!/^[0-9]+$/.test(value)) {
    return false;
  }

  return Number.isSafeInteger(Number(value));
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const leftText = leftInput.value.trim();
  const rightText = rightInput.value.trim();

  if (!isValidNumber(leftText) || !isValidNumber(rightText)) {
    alert("Error :(");
    return;
  }

  const left = Number(leftText);
  const right = Number(rightText);
  const operator = operatorSelect.value;

  if ((operator === "/" || operator === "%") && right === 0) {
    const message = "It's over 9000!";
    alert(message);
    console.log(message);
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = left + right;
      break;
    case "-":
      result = left - right;
      break;
    case "*":
      result = left * right;
      break;
    case "/":
      result = left / right;
      break;
    case "%":
      result = left % right;
      break;
  }

  alert(result);
  console.log(result);
});

setInterval(function () {
  alert("Please, use me...");
}, 30000);