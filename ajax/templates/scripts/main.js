//Primero hay que decir qué librerías vamos a usar
requirejs.config({

	baseUrl: "scripts/modulos",
	paths: {
		jquery:"../jquery",
		underscore:"../underscore",
		text: "../text"
	},
	//las librerías que no repeten el diseño modular
	//debemos decirles qué objeto queremos de ellas
	shim:{
		"underscore":{
			exports: "_"
		}
	}


});//end config

//Nuestra aplicacion comienza en la siguiente línea
requirejs(["inicio"],function(inicio){
	inicio.mostrarInicio();
})