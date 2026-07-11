<?php
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

function clean_field(string $value): string {
    return trim(str_replace(["\r", "\n"], ' ', $value));
}

$nombre  = clean_field($_POST['nombre'] ?? '');
$email   = clean_field($_POST['email'] ?? '');
$empresa = clean_field($_POST['empresa'] ?? '');

if ($nombre === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Datos inválidos');
}

$to      = 'pablo@nowmarketingdigital.com';
$subject = 'Nuevo lead desde la landing';
$body    = "Nombre: {$nombre}\nEmail: {$email}\nEmpresa: {$empresa}\n";

$headers   = [];
$headers[] = 'From: web@' . ($_SERVER['SERVER_NAME'] ?? 'localhost');
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

mail($to, $subject, $body, implode("\r\n", $headers));

header('Location: https://nowmarketing.ai/gracias');
exit;
