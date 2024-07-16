$(document).ready(function() {
    $('.card').hover(function() {
        $(this).find('.card-text').fadeIn(300);
    }, function() {
        $(this).find('.card-text').fadeOut(100);
    });

    // Example of jQuery animation
    $('#btnClick').click(function() {
        $('#content p').text('Text changed using jQuery!')
                      .fadeOut(1000) // Fade out over 1 second
                      .fadeIn(1000); // Fade back in over 1 second
    });
});