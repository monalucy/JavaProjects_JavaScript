// Function to display animal information based on selection
function showAnimalInfo() {
    var animal = document.getElementById("animalSelect").value;
    var animalInfo = "";
    var animalImage = "";

    switch (animal) {
        case "lion":
            animalInfo = "Lions eat meat.";
            animalImage = "C:\\Users\\Monica Gliga\\OneDrive\\Documents\\GitHub\\JavaProjects_JavaScript\\JavaScriptProjects\\baby_lion.jpg";
            break;
        case "duck":
            animalInfo = "Ducks eat plants, insects, and small fish.";
            animalImage = "C:\\Users\\Monica Gliga\\OneDrive\\Documents\\GitHub\\JavaProjects_JavaScript\\JavaScriptProjects\\babyduck.jpg";
            break;
        case "husky":
            animalInfo = "Huskies eat dog food and meat.";
            animalImage = "C:\\Users\\Monica Gliga\\OneDrive\\Documents\\GitHub\\JavaProjects_JavaScript\\JavaScriptProjects\\husky.jpg";
            break;
        case "kitten":
            animalInfo = "Kittens eat milk, meat, and cat food.";
            animalImage = "C:\\Users\\Monica Gliga\\OneDrive\\Documents\\GitHub\\JavaProjects_JavaScript\\JavaScriptProjects\\kitten.jpeg";
            break;
        case "lamb":
            animalInfo = "Lambs eat grass and hay.";
            animalImage = "C:\\Users\\Monica Gliga\\OneDrive\\Documents\\GitHub\\JavaProjects_JavaScript\\JavaScriptProjects\\lamb.jpg";
            break;
        default:
            animalInfo = "Select an animal to see what it eats.";
            animalImage = "";
    }

    document.getElementById("animalInfo").innerHTML = `
        <p>${animalInfo}</p>
        <img src="${animalImage}" alt="${animal}">
    `;
}

// Add comments explaining the code
// Function to display animal information based on selection
// Switch statement to determine the animal's food and image based on the selected animal
// Update the HTML element with id "animalInfo" to show the animal's food and image