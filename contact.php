<?php
#YOUR E-MAIL
define('TO', 'contacto@akconsulting.com.mx');
$referer=trim($_SERVER['HTTP_REFERER']);
header('Content-Type: text/html; charset=utf-8');
header("Location: $referer");
##E-MAIL SUBJECT
define('SUBJECT', 'Contact Form web page AK!');
try {
    $recaptcha = $_POST["g-recaptcha-response"];
 
	$url = 'https://www.google.com/recaptcha/api/siteverify';
	$data = array(
		'secret' => 'API_SECRET',
		'response' => $recaptcha
	);
	$options = array(
		'http' => array (
			'method' => 'POST',
			'content' => http_build_query($data)
		)
	);

    $context  = stream_context_create($options);
	$verify = file_get_contents($url, false, $context);
	$captcha_success = json_decode($verify);
	if ($captcha_success->success) {
		// No eres un robot, continuamos con el envío del email    
        sendEmail(TO, 
                trim($_POST['email']),
                SUBJECT,
                'contacto De: '.$_POST['name'].'<br/><br/> Tel: '.$_POST['tel'].'<br/><br/> Correo: '.$_POST['email'].'<br/><br/> <br/><br/>Mensaje: '.nl2br($_POST['message']));

	} else {
        // Eres un robot!
        echo 'Eres un robot!';
	}

} catch (Exception $e) {
    echo 'error envio correo: ',  $e->getMessage(), "\n";
}

function sendEmail($to, $from, $subj, $body)
{
	$date = date( 'r' );
	$phpversion = phpversion();
	$boundary = md5( time() );
	$headers = "From: $from\n"."Date: $date\n"."Content-Type: text/html; charset=\"UTF-8\"\n";
	mail(trim($to), trim($subj), $body, $headers );
}


?>