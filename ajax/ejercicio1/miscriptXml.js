function pedirProductos(){
	console.log("pidiendo productos al server");
	//comienzo ajax
	//a través del siguiente objeto me voy a comunicar con servidor.php
	var xmlhttp = new XMLHttpRequest();

	//lo primero que debo decirle al objeto es
	//qué hacer cuando reciba información del servidor.php
	xmlhttp.onreadystatechange = function (){

		if(this.readyState == 4 && this.status == 200){
			console.log(this.responseText);
			console.log(this.responseXML);

			var productosXML = this.responseXML.getElementsByTagName("producto");//o responseXml responseText
			for(var pXML in productosXML){
				alert("nombre: "+productosXML[pXML].getElementsByTagName("nombre").childNodes[0].nodeValue);
			}

		}

	};

	//ahora le digo con q comunicarse
	xmlhttp.open("GET","servidor.php",false);
	//q la lance
	xmlhttp.send()

	//fin ajax

	return[];
}

function inicio(){
	var productos = pedirProductos();
	for(var p of productos){
		console.log("mostrar: ");
		console.log(p);
		document.getElementById("listadoProductos").innerHTML+=
		"<div>"+
		"nombre "+p.nombre+
		" precio "+p.precio+
		"<a href='#' onclick='mostrarProducto("+p.id+")'>ver detalles</a>"
		"</div>";
	}
}

function mostrarProducto(id){
	var productos = pedirProductos();
var p = productos.find(function(p){return p.id==id;})
	alert("mostrar el producto "+ p.nombre);

}

inicio();

//motor de plantillas = libreria de js para tener una plantilla de html(moustache.js) angular tiene tambien uno tambien hay otro que se llama require











