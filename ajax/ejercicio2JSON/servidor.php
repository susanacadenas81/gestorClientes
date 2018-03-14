<?php
require "rb-mysql.php";
R::setup( 'mysql:host=localhost;dbname=tienda_online', 'root');
$productos = R::getAll('SELECT * FROM tabla_productos');
echo json_encode($productos);
?>