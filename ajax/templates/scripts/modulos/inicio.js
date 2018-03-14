define(["jquery","listarProductos","registrarProducto","registrarUsuario","text!html/menu.html"],
	function($,listarProductos,registrarProducto,registroUsuario,htmlMenu){
//CUANDO DESDE OTRO MODULO INCLUIDO EL DEL MAIN PIDA INICIO.JSO
//OBTENDRA EL OBJETO QUE DEVOLVEMOS A CONT
	return {
		mostrarInicio:function(){
			$("#menu").html(htmlMenu);
			$("#listarAnuncios").click(function(){
				listarProductos.mostrarListado();
			});
			$("#registrarAnuncio").click(function(){
				registrarProducto.mostrarRegistro();
			});
			$("#registrarUsuario").click(function(){
				registroUsuario.mostrarRegistroUsuario();
			});
			$("#contenedor").html(listarProductos.mostrarListado());
		}
	};//end return


});