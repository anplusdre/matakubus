<?php
$to = "hallo@matakubus.com";
$from = "no-reply@matakubus.com";

$headers = "From: " . $from . "\r\n";

$subject = "New subscription";
$body = "New user subscription: " . $_POST['email'];


if( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) )
{ 
    if (mail($to, $subject, $body, $headers, "-f " . $from))
    {
        echo '<div class="underDev">Great Thanks</div>';
    }
    else
    {
       echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';   
    }
}
else
{
   echo 'There was a problem with your e-mail (' . $_POST['email'] . ')';   
}
