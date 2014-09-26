<?php
  $name  = $_REQUEST['name'];
  $nameParts = explode(" ", $name);
  $email = $_REQUEST['email'];
  $budget = $_REQUEST['budget'];
  $message = $_REQUEST['message'];

  $to = 'john@wearegoodcitizen.com';

  $subject = 'Good Citizen - Project Planner Submission';

  $headers = "From: Good Citizen Project Planner" . "\r\n";
  $headers .= "Reply-To: ". strip_tags($email) . "\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
	$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
	$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
	$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($email) . "</td></tr>";
  $message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($budget) . "</td></tr>";
	$message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($message) . "</td></tr>";
	$message .= "</table>";
	$message .= "</body></html>";

  // Check to see if at least one POST variable has been set
  if ($name) {
    $send_contact=mail($to, $subject, $message, $headers);
  }

?>
