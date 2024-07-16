$(document).ready(function() {
    $('.info').hover(function() {
        var eat = $(this).data('eat');
        var sleep = $(this).data('sleep');
        $(this).text(sleep); // Show sleep info on hover
    }, function() {
        var eat = $(this).data('eat');
        $(this).text(eat); // Show eat info on mouse leave
    });

    $('#btnClick').click(function() {
        $('#content p').text('Text changed using jQuery!')
                      .fadeOut(1000) // Fade out over 1 second
                      .fadeIn(1000); // Fade back in over 1 second
    });
});