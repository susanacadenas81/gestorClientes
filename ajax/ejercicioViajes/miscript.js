function pedirViajes(){
	console.log("pidiendo productos al server");
	//comienzo ajax
	//a través del siguiente objeto me voy a comunicar con servidor.php
	var xmlhttp = new XMLHttpRequest();

	//lo primero que debo decirle al objeto es
	//qué hacer cuando reciba información del servidor.php
	xmlhttp.onreadystatechange = function (){

		if(this.readyState == 4 && this.status == 200){
			var viajes=JSON.parse(this.responseText);
			console.log(viajes);
			mostrarViajes(viajes);
		}

	};

	//ahora le digo con q comunicarse
	xmlhttp.open("GET","servidor.php",true);
	//q la lance
	xmlhttp.send();	
}

function mostrarViajes(viajes){

for(var v of viajes){
		console.log("mostrar: ");
		document.getElementById("listadoViajes").innerHTML+=
		"<div>"+
		"Título "+v.titulo+
		" Destino "+v.destino+
		" Fecha de caducidad "+v.caducidad+
		" Descripcion "+v.descripcion+
		" Precio "+v.precio+
		"<a href='#' onclick='mostrarViaje("+v.id+")'>ver detalles</a>"
		"</div>";
	}


}

function inicio(){
	pedirViajes();
}

function mostrarViaje(v){
	alert("mostrar el producto "+ v);
}

inicio();

//motor de plantillas = libreria de js para tener una plantilla de html(moustache.js) angular tiene tambien uno tambien hay otro que se llama require











