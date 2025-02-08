$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        const formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'emailcontact.php',
            data: formData,
            success: function(response) {
                alert(response);
            },
            error: function() {
                alert('There was an error submitting the form.');
            }
        });
    });
});
//JavaScript code for displaying an alert
alert ('Hello, this is a JavaScript alert!');