<?php

if(isset($_POST)==true){
	$archivo = $_FILES["archivo"];
	$nombre = $archivo["name"];
	$rutaDestino = "subidas/".$nombre;
	move_uploaded_file($archivo["tmp_name"],$rutaDestino);
	echo "archivo subido correctamente";
}
else{
	echo "no me ha llegado un post";
}

?>