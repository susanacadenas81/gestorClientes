function procesarRegistro(){

	var nombre = document.getElementById("campoNombre").value;
	var direccion = document.getElementById("campoDireccion").value;
	var poblacion = document.getElementById("campoPoblacion").value;
	var telefono = document.getElementById("campoTelefono").value;
	var email = document.getElementById("campoEmail").value;
	var fecha = document.getElementById("campoFecha").value;
	
	if(!/^([a-z]{2,30})$/i.test(nombre)){
		alert("nombre no válido");
		document.getElementById("campoNombre").value="";
		return false;
	}
	if(!/^([a-z]{2,60})$/i.test(direccion)){
		alert("direccion no válida");
		document.getElementById("campoDireccion").value="";
		return false;
	}
	if(!/^([a-z]{2,30})$/i.test(poblacion)){
		alert("poblacion no válida");
		document.getElementById("campoPoblacion").value="";
		return false;
	}
	if(!(/^([0-9]{1,9})$/i.test(telefono))){
		alert("teléfono no válido");
		document.getElementById("campoTelefono").value="";
		return false;

	}
	if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
		alert("email no válido");
		document.getElementById("campoEmail").value="";
		return false;
	}

	/*if(!/^([0-9]{6,10})$/.test(fecha)){
		alert("fecha no válida");
		document.getElementById("campoFecha").value="";
		return false;
	}
*/
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			if(this.responseText == "OK"){mostrarRegistroOk();}
		}
	}

	xhttp.open("POST","servidor.php",true);
	xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	//xhttp.send("nombre="+nombre+"&edad="+edad+"&direccion="+direccion+"&telefono="+telefono);
	xhttp.send(`nombre=${nombre}&direccion=${direccion}&poblacion=${poblacion}&telefono=${telefono}&email=${email}&nacimiento=${fecha}`);

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
	
	var xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange=function() {
		if(this.readyState==4 && this.status==200){
			var apuntados=JSON.parse(this.responseText);
			mostrarApuntados(apuntados);
		}
	}
	xhttp2.open("GET","servidor2.php",true);
	xhttp2.send();
	return false;
}

function mostrarApuntados(apuntados){
	for(var a of apuntados){
		
		document.body.innerHTML+=
		"Enhorabuena!!! alumno inscrito en el curso"+
		"<div>"+
		"Nombre "+a.nombre+
		" direccion "+a.direccion+
		" telefono "+a.telefono+
		" poblacion "+a.poblacion+
		"email "+a.email+
		"fecha de nacimiento "+a.nacimiento+
		"</div>";
	}
}
