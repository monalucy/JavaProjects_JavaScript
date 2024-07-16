<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  
  $to = "monica.monica317@yahoo.co.uk";
  $subject = "New contact form submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: noreply@yourdomain.com";
  
  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>