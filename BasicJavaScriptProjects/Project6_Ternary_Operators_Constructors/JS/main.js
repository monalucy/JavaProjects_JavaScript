// Function using ternary operation to check age
function checkAge() {
    const age = document.getElementById("ageInput").value; // Get age input value
    const result = age >= 18 ? "You are an adult." : "You are a minor."; // Ternary operation to check age
    document.getElementById("ageResult").innerText = result; // Display result
}

// Constructor function to create a Person object
function Person(name, age) {
    this.name = name; // Assign name to this object
    this.age = age;   // Assign age to this object
}

// Function to display the Person information
function displayPersonInfo() {
    const person = new Person("John Doe", 30); // Create a new Person object
    document.getElementById("personInfo").innerText = `${person.name} is ${person.age} years old.`; // Display Person info
}

// Nested function example
function outerFunction() {
    let outerVariable = "I'm outside!";

    function innerFunction() {
        let innerVariable = "I'm inside!";
        console.log(outerVariable); // Accessing outer variable
        console.log(innerVariable); // Accessing inner variable
    }

    innerFunction(); // Call the nested function
}

// Call outerFunction to demonstrate nested function
outerFunction();