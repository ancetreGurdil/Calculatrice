let firstNumber = null;
let operator = null;
let secondNumber = null;

// fonction permettant de récuperer le chiffre/symbole choisi par l'utilisateur
function appendNumber(number) {
  const input = document.getElementById("input");
  
  if (number === "." && input.value.indexOf(".") === -1) {
    input.value += ".";
  } else if (!isNaN(number)) {
    input.value += number;
  }
}
// fonction permettant de choisir l'opérateur
function performOperation(selectedOperator) {
  const input = document.getElementById("input");
  
  if (input.value !== "") {
    firstNumber = input.value;
    operator = selectedOperator;
    input.value = "";
  }
}
// fonction permettant de calculer en fonction de l'opérateur choisi
function calculate() {
  const input = document.getElementById("input");
  
  if (firstNumber !== null && operator !== null && input.value !== "") {
    secondNumber = input.value;
    let result = null;

    switch (operator) {
      case '+':
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case '-':
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case '*':
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case '/':
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;  
      default:
        return;
    }

    input.value = result.toFixed(2);
    firstNumber = result.toString();
    operator = null;
    secondNumber = null;
  }
}

// fonction permettant de nettoyer le champ input
function clearInput() {
  const input = document.getElementById("input");
  input.value = "";
  firstNumber = null;
  operator = null;
  secondNumber = null;
}

