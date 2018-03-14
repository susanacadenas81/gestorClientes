function procesarRegistro(){

	//extraer las informaciones introducidas por el usuario
	var nombre = document.getElementById("campoNombre").value;
	var edad = document.getElementById("campoEdad").value;
	var direccion = document.getElementById("campoDireccion").value;
	var telefono = document.getElementById("campoTelefono").value;
	var email = document.getElementById("campoEmail").value;
	//ahora habria que validarlos
	//la forma más recomendada de realizar validaciones es usar expresiones regulares


	//var expresionValidacionNombre = /^([a-z]{2,5})$/i

	//en js siempre empiezan y terminan en barra
	//empezar y terminar con caracteres de la a a la zeta y de 2 a 5, la i del final es que es insensitive
	//no diferencia entre mayúsculas y minúsculas 

	//var resultadoValidacion = expresionValidacionNombre.test(nombre);

	//para validar el nombre, devuelve true or false

	//alert("resultado validacion:"+resultadoValidacion);


	//lo mismo pero en una sola lines
	if(!/^([a-z]{2,5})$/i.test(nombre)){
		alert("nombre no válido");
		document.getElementById("campoNombre").value="";
		return false;
	}


	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			if(this.responseText == "OK"){mostrarRegistroOk();}
		}
	}

	xhttp.open("POST","servidor.php",true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//xhttp.send("nombre="+nombre+"&edad="+edad+"&direccion="+direccion+"&telefono="+telefono);
	xhttp.send(`nombre=${nombre}&edad=${edad}&direccion=${direccion}&telefono=${telefono}`);

	//una vez lanzada la petición ocultamos el formulario para que el usuario no se registre
	//de nuevo
	ocultarFormulario();
	return false;
}

function ocultarFormulario(){
	//ocultamos e indicamos que se está procesando la petición
	document.getElementById("contenedor").innerHTML="Procesando petición...";
}

function mostrarRegistroOk(){
	document.getElementById("contenedor").innerHTML="Enhorabuena!!! usuario registrado correctamente en el equipo"
}
