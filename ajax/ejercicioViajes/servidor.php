<?php
require "rb-mysql.php";
R::setup( 'mysql:host=localhost;dbname=ofertas_viajes', 'root');
$viajes = R::getAll('SELECT * FROM tabla_viajes2');
echo json_encode($viajes);
?>