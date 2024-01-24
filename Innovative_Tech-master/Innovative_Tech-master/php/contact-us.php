<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["fname"];
    $name = $_POST["lname"]
    $email = $_POST["mail"];
   // $subject = $_POST["subject"];
    $message = $_POST["msg"];
    
    // Set recipient email address
    $to = "onkabetsemorgan@gmail.com";
    
    // Create email headers
    $headers = "From: $name <$email>\r\n";
    
    // Send the email
    mail($to, /*$subject,*/ $message, $headers);
    
    // Redirect the user to a thank-you page
    header("Location: thank-you.html");
    exit;
}
?>
