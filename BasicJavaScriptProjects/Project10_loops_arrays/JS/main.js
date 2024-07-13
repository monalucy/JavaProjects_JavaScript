// Function utilizing a while loop
function whileLoopFunction() {
    // Initializing the variable
    let text = "";
    let i = 0;
    // While loop runs until i is less than 5
    while (i < 5) {
        text += "The number is " + i + "<br>";
        i++;
    }
    // Display the result in the specified paragraph
    document.getElementById("whileLoopResult").innerHTML = text;
}

// Function utilizing a for loop
function forLoopFunction() {
    // Initializing the variable
    let text = "";
    // For loop runs from 0 to 4
    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
    }
    // Display the result in the specified paragraph
    document.getElementById("forLoopResult").innerHTML = text;
}

// Function utilizing an array
function arrayFunction() {
    // Initializing the array
    let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    let text = "";
    // For loop to iterate through the array
    for (let i = 0; i < fruits.length; i++) {
        text += fruits[i] + "<br>";
    }
    // Display the result in the specified paragraph
    document.getElementById("arrayResult").innerHTML = text;
}

// Creating an object using the let keyword
let person = {
    firstName: "Monica",
    lastName: "Gliga",
    age: 28,
    occupation: "Developer"
};

// Adding a function to display the object properties
function displayPerson() {
    let text = "Name: " + person.firstName + " " + person.lastName + "<br>";
    text += "Age: " + person.age + "<br>";
    text += "Occupation: " + person.occupation;
    alert(text);
}

// Call the displayPerson function when the page loads
window.onload = function() {
    displayPerson();
};