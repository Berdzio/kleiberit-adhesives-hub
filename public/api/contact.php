<?php
declare(strict_types=1);

// ============================================================
//  KONFIGURACJA — uzupełnij przed wdrożeniem na OVH
// ============================================================
const TO_EMAIL    = 'info@klejeme.pl';
const FROM_DOMAIN = 'klejeme.pl';

// Wysyłka przez SMTP OVH (zalecane — lepsza dostarczalność)
// Odkomentuj i uzupełnij danymi konta pocztowego OVH:
// const USE_SMTP   = true;
// const SMTP_HOST  = 'ssl0.ovh.net';  // serwer SMTP OVH
// const SMTP_PORT  = 465;             // SSL; alternatywnie 587 (TLS)
// const SMTP_USER  = 'info@klejeme.pl';
// const SMTP_PASS  = 'TwojeHaslo';

// Fallback: PHP mail() — działa na hostingu OVH bez konfiguracji
const USE_SMTP = false;
// ============================================================

header('Content-Type: application/json; charset=UTF-8');

// CORS — tylko własne domeny
$allowedOrigins = ['https://klejeme.pl', 'https://www.klejeme.pl'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit(json_encode(['success' => false, 'error' => 'Method not allowed']));
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    exit(json_encode(['success' => false, 'error' => 'Invalid request']));
}

// Walidacja
$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$message = trim($data['message'] ?? '');
$company = trim($data['company'] ?? '');
$phone   = trim($data['phone']   ?? '');

if (mb_strlen($name) < 2) {
    http_response_code(422);
    exit(json_encode(['success' => false, 'error' => 'invalid_name']));
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    exit(json_encode(['success' => false, 'error' => 'invalid_email']));
}
if (mb_strlen($message) < 10) {
    http_response_code(422);
    exit(json_encode(['success' => false, 'error' => 'message_too_short']));
}

// Zabezpieczenie przed header injection
$strip = static fn(string $s): string => str_replace(["\r", "\n", "\0"], ' ', $s);
$name    = $strip($name);
$email   = $strip($email);
$company = $strip($company);
$phone   = $strip($phone);

// Treść maila
$subject = "Zapytanie od $name" . ($company ? " ($company)" : '');
$body    = "Imię i nazwisko : $name\n";
if ($company) $body .= "Firma           : $company\n";
$body .= "E-mail          : $email\n";
if ($phone) $body .= "Telefon         : $phone\n";
$body .= "\nWiadomość:\n$message\n";

$sent = USE_SMTP
    ? sendSmtp($subject, $body, $name, $email)
    : sendMail($subject, $body, $name, $email);

http_response_code($sent ? 200 : 500);
exit(json_encode(['success' => $sent]));

// ---- Wysyłka przez PHP mail() ----
function sendMail(string $subject, string $body, string $fromName, string $replyTo): bool
{
    $subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $headers = implode("\r\n", [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        'From: Formularz klejeme.pl <noreply@' . FROM_DOMAIN . '>',
        'Reply-To: ' . $fromName . ' <' . $replyTo . '>',
        'X-Mailer: PHP/' . PHP_VERSION,
    ]);
    return mail(TO_EMAIL, $subject, base64_encode($body), $headers);
}

// ---- Wysyłka przez SMTP (OVH ssl0.ovh.net) ----
function sendSmtp(string $subject, string $body, string $fromName, string $replyTo): bool
{
    $ctx  = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
    $sock = @stream_socket_client('ssl://' . SMTP_HOST . ':' . SMTP_PORT, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);
    if (!$sock) return false;

    stream_set_timeout($sock, 10);

    $recv = static function () use ($sock): string {
        $out = '';
        while ($line = fgets($sock, 512)) {
            $out .= $line;
            if (isset($line[3]) && $line[3] === ' ') break; // last line of response
        }
        return $out;
    };
    $send = static function (string $cmd) use ($sock, $recv): string {
        fwrite($sock, $cmd . "\r\n");
        return $recv();
    };

    $recv(); // 220 banner
    $send('EHLO ' . FROM_DOMAIN);
    $send('AUTH LOGIN');
    $send(base64_encode(SMTP_USER));
    $resp = $send(base64_encode(SMTP_PASS));
    if (strpos($resp, '235') === false) { fclose($sock); return false; }

    $send('MAIL FROM:<' . SMTP_USER . '>');
    $send('RCPT TO:<' . TO_EMAIL . '>');
    $send('DATA');

    $subjectEncoded = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $msg = "MIME-Version: 1.0\r\n"
         . "Content-Type: text/plain; charset=UTF-8\r\n"
         . "Content-Transfer-Encoding: base64\r\n"
         . "From: Formularz klejeme.pl <" . SMTP_USER . ">\r\n"
         . "Reply-To: $fromName <$replyTo>\r\n"
         . "To: <" . TO_EMAIL . ">\r\n"
         . "Subject: $subjectEncoded\r\n\r\n"
         . chunk_split(base64_encode($body))
         . "\r\n.";

    fwrite($sock, $msg . "\r\n");
    $resp = $recv();
    $send('QUIT');
    fclose($sock);

    return strpos($resp, '250') !== false;
}
