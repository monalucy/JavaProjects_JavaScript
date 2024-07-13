// JavaScript code demonstrating various operators and expressions

// Assign a variable with a number
var num = 42;

// Use document.write() and typeof to display the data type of the variable 'num'
document.write("<p><strong>The data type of 'num' is:</strong> " + typeof num + "</p>");

// Write an expression combining a string and a number
var combinedExpression = "The answer is " + num;
document.write("<p><strong>Combined Expression:</strong> " + combinedExpression + "</p>");

// Use == operator to compare values
var equalsComparison = (num == 42);
document.write("<p><strong>num == 42:</strong> " + equalsComparison + "</p>");

// Use === operator to compare values and types
var strictEqualsComparison = (num === 42);
document.write("<p><strong>num === 42:</strong> " + strictEqualsComparison + "</p>");

// Use > operator
var greaterThanComparison = (num > 40);
document.write("<p><strong>num > 40:</strong> " + greaterThanComparison + "</p>");

// Use < operator
var lessThanComparison = (num < 50);
document.write("<p><strong>num < 50:</strong> " + lessThanComparison + "</p>");

// Use && operator
var andComparison = (num > 40 && num < 50);
document.write("<p><strong>num > 40 && num < 50:</strong> " + andComparison + "</p>");

// Use || operator
var orComparison = (num > 40 || num < 30);
document.write("<p><strong>num > 40 || num < 30:</strong> " + orComparison + "</p>");

// Use ! operator
var notComparison = !(num == 42);
document.write("<p><strong>!(num == 42):</strong> " + notComparison + "</p>");