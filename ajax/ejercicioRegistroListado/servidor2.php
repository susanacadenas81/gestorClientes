<?php
require "rb-mysql.php";
R::setup( 'mysql:host=localhost;dbname=ejercicio_registro_listado', 'root');
$apuntados = R::getAll('SELECT nombre FROM apuntados');
echo json_encode($apuntados);
?>