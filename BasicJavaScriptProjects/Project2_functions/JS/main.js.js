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