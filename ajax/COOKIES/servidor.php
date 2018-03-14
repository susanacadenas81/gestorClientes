<?php

echo "tengo acceso a todas las cookies:";
print_r($_COOKIE);

echo "te voy a agregar una cookie";
setcookie("cookiedesdeelservidor","valor desde el server");

echo "tengo acceso a todas las cookies:";
print_r($_COOKIE);
?>