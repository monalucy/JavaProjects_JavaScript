// JavaScript code for displaying an alert when the page loads
window.alert('Hello, welcome to my page!');

// Assign a string value to a variable with proper escaping of quotes
var A = "Develop your skills, \"Let it shine! or let the spark die!\" See yourself shine!";

// Display the value of the variable 'A' using window.alert()
window.alert(A);

// Create two variables with string values
var Sent1 = "This is the beginning your career";
var Sent2 = " and this is the best choice you have made.";

// Concatenate the Sent1 and Sent2 variables together
var concatenatedString = Sent1 + Sent2;

// Display the concatenated string on the web page
document.write(concatenatedString);

// Assign string values to multiple variables
var Course = "Software Development", Skills = "JavaScript", Units = "CSS";

// Display the value of the variable 'Skills' on the web page
document.write("<br>" + Skills);

// Function to display a message in the HTML element with the ID 'output'
function displayMessage() {
    var element = document.getElementById("output"); // Get the element with ID 'output'
    element.innerHTML = "Amazing skills!"; // Set the inner HTML of the element to "Amazing skills!"
}