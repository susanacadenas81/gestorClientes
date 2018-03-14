define(["jquery","underscore","text!html/listadoProductos.html"],function($,_,htmlListadoProductos){

	return {

		mostrarListado: function(){
			
				$.getJSON("servidor.php",
					{operacion:"listarProductos"},
					function(res){
					var template = _.template(htmlListadoProductos);
					var resultadoTemplate = template({productos:res});
					$("#contenedor").html(resultadoTemplate);
				});
		
		}


	}//end return

})