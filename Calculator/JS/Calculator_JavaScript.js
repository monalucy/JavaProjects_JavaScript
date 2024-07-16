// Define the initial state of the calculator
const calculator = {
    displayValue: '0', // The value currently displayed on the screen
    firstOperand: null, // The first operand for the operations
    waitingForSecondOperand: false, // Flag to check if the second operand is needed
    operator: null, // The operator for the calculation
};

// Function to update the display based on the calculator state
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

// Initialize the display
updateDisplay();

// Function to handle digit inputs
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    // If waiting for the second operand, overwrite the display value with the new digit
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        // Otherwise, append the digit to the current display value
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

// Function to handle decimal point inputs
function inputDecimal(dot) {
    // If the current operand is waiting, do nothing
    if (calculator.waitingForSecondOperand === true) return;

    // If the display value does not already contain a decimal point, append it
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

// Function to handle operator inputs
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    // If an operator is already present and waiting for the second operand, update the operator
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    // If first operand is null, set it to the current input value
    if (firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        // If an operator is present, perform the calculation
        const result = calculate(firstOperand, inputValue, operator);

        // Update the display value with the result and set the first operand to the result
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    // Set the flag to wait for the second operand and update the operator
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

// Function to perform the calculation based on the operator
function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }

    return secondOperand;
}

// Function to reset the calculator to its initial state
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

// Add event listener to handle button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;

    // Ignore clicks that are not on buttons
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        // Handle operator buttons
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        // Handle all-clear button
        resetCalculator();
        updateDisplay();
        return;
    }

    if (target.value === '.') {
        // Handle decimal point button
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    // Handle digit buttons
    inputDigit(target.value);
    updateDisplay();
});