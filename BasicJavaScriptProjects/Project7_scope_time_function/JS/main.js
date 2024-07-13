// Global variable
var globalVariable = "I'm a global variable";

// Function to get greeting based on current time
function Time_function() {
    // Local variable
    var greeting;
    var currentTime = new Date().getHours(); // Get current hour

    // If statement to determine the greeting based on the current time
    if (currentTime < 12) {
        greeting = "Good morning!";
    } else if (currentTime < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    document.getElementById("greeting").innerText = greeting; // Display the greeting
}

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    var number = document.getElementById("numberInput").value; // Get input value
    var result;

    // If statement to check the number
    if (number > 0) {
        result = "The number is positive.";
    } else if (number < 0) {
        result = "The number is negative.";
    } else {
        result = "The number is zero.";
    }

    document.getElementById("numberResult").innerText = result; // Display the result
}

// Intentionally write a function with an error
function faultyFunction() {
    try {
        var num = 10;
        var sum = num + undeclaredVariable; // Error: undeclaredVariable is not defined
    } catch (error) {
        console.log("An error occurred: " + error.message); // Log error message to the console
    }
}

// Call the faulty function to demonstrate error handling
faultyFunction();