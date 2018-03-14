<?php
require "rb-mysql.php";
R::setup( 'mysql:host=localhost;dbname=ejercicio_registro_listado', 'root');
$nombre = $_POST["nombre"];
$direccion = $_POST["direccion"];
$poblacion = $_POST["poblacion"];
$telefono = $_POST["telefono"];
$email=$_POST["email"];
$fecha=$_POST["nacimiento"];
//una vez recogidos los datos que han llegado por ajax
//deberiamos validar en servidor dichos valores

//parte de validacion...
//una vez validado todo registramos en bd
$apuntado = R::dispense( "apuntados" );
    $apuntado->nombre = $nombre;
    $apuntado->direccion = $direccion;
    $apuntado->poblacion = $poblacion;
    $apuntado->telefono = $telefono;
    $apuntado->email = $email;
    $apuntado->nacimiento = $fecha;
    R::store($apuntado);
    echo "OK";

?>