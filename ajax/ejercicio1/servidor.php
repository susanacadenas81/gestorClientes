<?php
require "rb-mysql.php";
R::setup( 'mysql:host=localhost;dbname=tienda_online', 'root');
$productos = R::getAll('SELECT * FROM tabla_productos');
header ('Content-type:application/xml');
echo"<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
echo"<productos>";
foreach ($productos as $value) {

	echo "<producto>";

	echo "<nombre>";
	echo $value["nombre"];
	echo"</nombre>";

	echo"<precio>";
	echo $value["precio"];
	echo"</precio>";

	echo"<descripcion>";
	echo $value["descripcion"];
	echo"</descripcion>";

	echo "<id>";
	echo $value["id"];
	echo "</id>";

	echo"</producto>";
}

echo"</productos>";

?>