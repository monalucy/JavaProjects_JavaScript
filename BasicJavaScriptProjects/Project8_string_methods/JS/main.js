// Function to concatenate two animal names
function concatStrings() {
    var animal1 = "Lion";
    var animal2 = "Tiger";
    // Concatenate animal1 and animal2
    var result = animal1.concat(" and ", animal2);
    // Display the result in the paragraph with id 'concatResult'
    document.getElementById("concatResult").innerText = result;
}

// Function to slice a part of an animal name
function sliceString() {
    var animal = "Elephant";
    // Slice the string from index 3 to 6
    var result = animal.slice(3, 6);
    // Display the result in the paragraph with id 'sliceResult'
    document.getElementById("sliceResult").innerText = result;
}

// Function to convert a number to a string
function numberToString() {
    var num = 42;
    // Convert the number to a string
    var result = num.toString();
    // Display the result in the paragraph with id 'toStringResult'
    document.getElementById("toStringResult").innerText = result;
}

// Function to format a number to a specified precision
function numberToPrecision() {
    var num = 123.456789;
    // Format the number to 4 digits of precision
    var result = num.toPrecision(4);
    // Display the result in the paragraph with id 'toPrecisionResult'
    document.getElementById("toPrecisionResult").innerText = result;
}

// Function to get the length of an animal name
function animalLength() {
    var animal = "Giraffe";
    // Get the length of the animal name
    var result = animal.length;
    // Display the result in the paragraph with id 'lengthResult'
    document.getElementById("lengthResult").innerText = "The length of 'Giraffe' is: " + result;
}

// Function to get a random animal from an array
function randomAnimal() {
    var animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];
    // Get a random animal
    var result = animals[Math.floor(Math.random() * animals.length)];
    // Display the result in the paragraph with id 'randomAnimalResult'
    document.getElementById("randomAnimalResult").innerText = "Random animal: " + result;
}