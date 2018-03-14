<?php
require "rb-mysql.php";
R::setup( 'mysql:host=localhost;dbname=ejercicio_registro_equipo', 'root');
$nombre = $_POST["nombre"];
$edad = $_POST["edad"];
$direccion = $_POST["direccion"];
$telefono = $_POST["telefono"];
//una vez recogidos los datos que han llegado por ajax
//deberiamos validar en servidor dichos valores

//parte de validacion...
//una vez validado todo registramos en bd
$apuntado = R::dispense( "apuntados" );
    $apuntado->nombre = $nombre;
    $apuntado->edad = $edad;
    $apuntado->direccion = $direccion;
    $apuntado->telefono = $telefono;
    R::store($apuntado);
    echo "OK";

?>