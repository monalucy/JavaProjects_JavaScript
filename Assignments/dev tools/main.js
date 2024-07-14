// JavaScript to display concatenated messages with styles

function displayMessages() {
    var A = "Always ";
    var B = "remember: ";
    var message1 = A + B;

    var X = "you ";
    var Y = "are ";
    var message2 = X + Y;

    var M = "unique, ";
    var N = "just like everyone else.";
    var message3 = M + N;

    var combinedMessage = message1 + "<br>" + message2 + "<br>" + message3;

    document.getElementById("message").innerHTML = combinedMessage;
}

// Add comments explaining the code
// Function to display concatenated messages when the button is clicked
// Variables A, B, X, Y, M, and N are declared and concatenated to form messages
// The combinedMessage variable stores all messages
// The combinedMessage is displayed in the HTML element with id "message"