<?php
require "rb-mysql.php";
R::setup( 'mysql:host=localhost;dbname=ejercicio_chat', 'root');

$operacion = $_REQUEST["operacion"];
if($operacion=="registrar"){

	$nombre = $_POST["nombre"];
	$texto = $_POST["texto"];
	$hora = $_POST["hora"];
	$asunto = $_POST["asunto"];

	$mensaje = R::dispense("mensajes");
	    $mensaje->nombre = $nombre;
	    $mensaje->texto = $texto;
	    $mensaje->hora = $hora;
	    $mensaje->asunto = $asunto;
	    R::store($mensaje);

	    echo "ok";
}
elseif($operacion == "listar"){
	$mensajes = R::getAll('SELECT * FROM mensajes');
	echo json_encode($mensajes);
}
    

?>