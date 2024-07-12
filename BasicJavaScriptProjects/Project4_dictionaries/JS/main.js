// JavaScript code to demonstrate a dictionary and deleting a key before displaying its value

// Create a dictionary (object) with some key-value pairs
var dictionary = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

// Function to display a key-value pair from the dictionary
function displayKeyValuePair() {
    var keyToDisplay = "city"; // The key whose value we want to display

    // Get the value of the key before deleting it
    var valueToDisplay = dictionary[keyToDisplay];

    // Delete the key from the dictionary
    delete dictionary[keyToDisplay];

    // Display the key-value pair in the HTML element with ID 'dictionaryOutput'
    document.getElementById("dictionaryOutput").innerHTML = keyToDisplay + ": " + valueToDisplay;
}

// Function to display the entire dictionary
function displayDictionary() {
    var output = "";
    for (var key in dictionary) {
        output += key + ": " + dictionary[key] + "<br>";
    }
    document.getElementById("fullDictionaryOutput").innerHTML = output;
}