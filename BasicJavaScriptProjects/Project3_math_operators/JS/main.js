// JavaScript code for displaying an alert when the page loads
window.alert('Hello, welcome to my page!');

// Assign a string value to a variable with proper escaping of quotes
var A = "Develop your skills, \"Let it shine! or let the spark die!\" See yourself shine!";

// Display the value of the variable 'A' using window.alert()
window.alert(A);

// Create two variables with string values
var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

// Concatenate the Sent1 and Sent2 variables together using the += operator
var concatenatedString = Sent1;
concatenatedString += Sent2;

// Function to display a message in the HTML element with the ID 'output'
function displayMessage() {
    var element = document.getElementById("output"); // Get the element with ID 'output'
    element.innerHTML = "Amazing skills!"; // Set the inner HTML of the element to "Amazing skills!"
}

// Function to assign two variables, concatenate them using the += operator, and display their values using getElementById
function showConcatenatedMessage() {
    var var1 = "Hello, "; // First variable assignment
    var var2 = "world!"; // Second variable assignment
    var combinedMessage = var1; // Initialize combinedMessage with the value of var1
    combinedMessage += var2; // Concatenate var2 to combinedMessage using the += operator

    // Display the concatenated message in the HTML element with ID 'display'
    document.getElementById("display").innerHTML = combinedMessage;
}

// Display the concatenated string on the web page in the element with ID 'concatenated'
document.getElementById("concatenated").innerHTML = concatenatedString;

// Function to perform addition and display the result
function displayAdditionResult() {
    var result = 5 + 10; // Simple addition operation
    document.getElementById("Math").innerHTML = "The result of 5 + 10 is " + result; // Display the result
}

// Function to perform subtraction and display the result
function displaySubtractionResult() {
    var result = 10 - 5; // Simple subtraction operation
    document.getElementById("MathSubtraction").innerHTML = "The result of 10 - 5 is " + result; // Display the result
}

// Function to perform multiplication and display the result
function displayMultiplicationResult() {
    var result = 4 * 3; // Simple multiplication operation
    document.getElementById("MathMultiplication").innerHTML = "The result of 4 * 3 is " + result; // Display the result
}

// Function to perform division and display the result
function displayDivisionResult() {
    var result = 20 / 4; // Simple division operation
    document.getElementById("MathDivision").innerHTML = "The result of 20 / 4 is " + result; // Display the result
}

// Function to perform multiple operations and display the result
function displayMultipleOperationsResult() {
    var result = (5 + 3) * 2 - 4 / 2; // Multiple operations
    document.getElementById("MathMultiple").innerHTML = "The result of (5 + 3) * 2 - 4 / 2 is " + result; // Display the result
}

// Function to use the negation operator and display the result
function displayNegationResult() {
    var result = -10; // Negation operation
    document.getElementById("MathNegation").innerHTML = "The negation of 10 is " + result; // Display the result
}

// Function to use the increment operator and display the result
function displayIncrementResult() {
    var number = 5; // Initial number
    number++; // Increment operation
    document.getElementById("MathIncrement").innerHTML = "The result of incrementing 5 is " + number; // Display the result
}

// Function to use the decrement operator and display the result
function displayDecrementResult() {
    var number = 5; // Initial number
    number--; // Decrement operation
    document.getElementById("MathDecrement").innerHTML = "The result of decrementing 5 is " + number; // Display the result
}

// Function to use the modulus operator and display the result
function displayModulusResult() {
    var result = 10 % 3; // Modulus operation
    document.getElementById("MathModulus").innerHTML = "The result of 10 % 3 is " + result; // Display the result
}

// Function to use Math.random() and display the result
function displayRandomResult() {
    var result = Math.random(); // Math.random() function
    document.getElementById("MathRandom").innerHTML = "A random number between 0 and 1 is " + result; // Display the result
}