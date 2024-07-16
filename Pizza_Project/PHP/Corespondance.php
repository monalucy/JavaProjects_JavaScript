<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "monica.monica317@yahoo.co.uk";
    $subject = "New Pizza Order";
    $message = $_POST['message'];
    $headers = "From: no-reply@yourdomain.com" . "\r\n" .
               "Reply-To: no-reply@yourdomain.com" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Order submitted successfully.";
    } else {
        echo "Failed to send order.";
    }
} else {
    echo "Invalid request.";
}
?>