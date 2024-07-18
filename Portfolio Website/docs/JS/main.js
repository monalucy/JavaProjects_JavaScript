$(document).ready(function() {
  // Form submission
  $('#contactForm').on('submit', function(event) {
    event.preventDefault();
    
    const formData = $(this).serialize();
    
    $.ajax({
      type: 'POST',
      url: 'C:\\Users\\Monica Gliga\\OneDrive\\Documents\\GitHub\\JavaProjects_JavaScript\\Portfolio Website\\PHP\\email.php',
      data: formData,
      success: function(response) {
        alert('Form submitted successfully.');
      },
      error: function() {
        alert('There was an error submitting the form.');
      }
    });
  });
});