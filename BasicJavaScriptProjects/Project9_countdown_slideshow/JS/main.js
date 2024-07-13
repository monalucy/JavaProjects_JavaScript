function countdown() {
    // Get the number of seconds from the input field
    var seconds = document.getElementById("seconds").value;

    function tick() {
        // Decrement the seconds
        seconds = seconds - 1;
        // Update the timer display
        document.getElementById("timer").innerHTML = seconds;
        // Set a timeout for the next tick
        var time = setTimeout(tick, 1000);
        // Check if the countdown is finished
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "";
        }
    }
    tick();
}

// Slideshow code
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}