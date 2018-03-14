var intervalo = setInterval(()=>{

	$.getJSON("servidor.php",{operacion:"listar"},function(res){
		//console.log(res);
		$("#listadoMensajes").html("");
		for(r of res){
			$("#listadoMensajes").append(r.nombre+": "+r.texto+"\n");
		}
	});

},100);


$("#botonEnvioMensaje").click(function(){
	var nombre = $("#campoNombre").val();
	var texto = $("#campoTexto").val();
//$("<p>tu mensaje se está enviando</p>").appendTo('#advertencia');
	$.post("servidor.php",{
		operacion: "registrar",
		nombre:nombre,
		texto:texto
	},function(res){
		alert("He recibido del servidor "+res);
		//obtenerMensajes();
		$("#campoTexto").val("");
	});
	//var texto = $("#campoTexto").val("");
});

//obtenerMensajes();