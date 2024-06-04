let currentInput = '';
let operator = null;

function takeNumber(number) {
    currentInput += number;
    updateDisplay();
}

function chooseOperation(op) {
    operator = op;
    currentInput += op;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    updateDisplay();
}

// function appendDecimal(dot) {
//     if (!currentInput.includes(dot)) {
//         currentInput += dot;
//         updateDisplay();
//     }
// }

function calculate() {
    let result = eval(currentInput);
    currentInput = String(result);
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
