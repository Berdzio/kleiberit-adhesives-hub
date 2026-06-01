<?php
// Skopiuj ten plik jako config.php na serwerze i uzupełnij dane.
// config.php jest w .gitignore — hasła nigdy nie trafiają do repozytorium.

// Tryb wysyłki: 'smtp' lub 'mail'
define('MAIL_DRIVER', 'mail');

// Adres docelowy
define('TO_EMAIL',    'info@klejeme.pl');
define('FROM_DOMAIN', 'klejeme.pl');

// SMTP OVH — uzupełnij tylko przy MAIL_DRIVER = 'smtp'
define('SMTP_HOST', 'ssl0.ovh.net');
define('SMTP_PORT', 465);
define('SMTP_USER', 'info@klejeme.pl');
define('SMTP_PASS', 'ZMIEN_NA_SWOJE_HASLO');
