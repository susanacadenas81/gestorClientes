
function obtenerMensajes(){

	$.getJSON("servidor.php",{operacion:"listar"},function(res){
		$("#listadoMensajes").html("");
		for(r of res){
			$("#listadoMensajes").append("HORA: "+r.hora+"\n"+"ASUNTO: "+r.asunto+"\n");
			$("#listadoMensajes").append(r.nombre+": "+r.texto+"\n");
			salto();
		}
	});

}


$("#botonEnvioMensaje").click(function(){
	var nombre = $("#campoNombre").val();
	var texto = $("#campoTexto").val();
	var hora = new Date().toLocaleTimeString();
	var asunto = $("#asunto").val();
$("<p>tu mensaje se está enviando</p>").appendTo('#advertencia');
	$.post("servidor.php",{
		operacion: "registrar",
		nombre:nombre,
		texto:texto,
		hora:hora,
		asunto:asunto
	},function(res){
		obtenerMensajes();
		$("#advertencia").html("");
		$("#campoTexto").val("");
		$("#asunto").val("");
	});
	//var texto = $("#campoTexto").val("");
});

function arrancarTimer(){
	var timer = setInterval(obtenerMensajes,1000);
}
function salto(){
var elem = $('#listadoMensajes');
elem.scrollTop(elem[0].scrollHeight);
}
arrancarTimer();