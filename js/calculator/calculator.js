const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  // ✅ VALIDACIÓN DENTRO DE LA FUNCIÓN divide
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}

module.exports = {add: add, subtract: subtract, divide: divide, multiply: multiply};