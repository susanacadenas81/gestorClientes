//----------------------------------CLASES
class Client{

	constructor(){
		this.id=document.getElementById("id").value;
		this.dni=document.getElementById("dni").value;
		this.nombre=document.getElementById("nombre").value;
		this.direccion=document.getElementById("direccion").value;
		this.edad=document.getElementById("edad").value;
		this.residente=document.getElementById("residente").value;
	}

}


class Clients{

	constructor(){
		this.clients_list=[];
	}

	//----------------------------------MÉTODOS PARA CLIENTES

	add(){
		if(this.searchIndex(document.getElementById("id").value)===null){
											    this.clients_list.push(new Client());
					   					         clean();
					   					         return true;
					   					        }
					   					        else{clean();
					   					        	return false;
					   					        }
	}

	modify(){

		if(this.searchIndex(document.getElementById("id").value)!==null){
		var client = new Client();
		this.clients_list.splice(this.searchIndex(client.id),1,client);
		return true;}

    	else{return false}

	}

	delete(){
		if(this.searchIndex(document.getElementById("id").value)!==null){
			this.clients_list.splice(this.searchIndex(document.getElementById("id").value),1)
			return true;
		}
		else{
			return false;
		}
	}	

	searchIndex(id){
		if(this.clients_list.length!=0){
							for(let i=0; i<this.clients_list.length;i++){
								if(this.clients_list[i].id==id){
									return i;
								}
							}
							return null;
						  }
						  else{
						  return null}
	}

//-------------------------------------------------------------------MÉTODOS PARA LAS LISTAS

	saveList(){
		if(this.clients_list.length!=0){
		localStorage.clients = JSON.stringify(this.clients_list);
		return true;
		}
		else{
		return false;
		}
	}

	loadList(){
		if(localStorage.clients!==undefined  && localStorage.clients!="{}"){this.clients_list=JSON.parse(localStorage.clients);
																			return true;}
		else{return false;}
	}

	emptyList(){
		localStorage.clients = JSON.stringify({});
	}

//------------------------------------------------------------------------MÉTODOS PARA LAS TABLAS

	printTable(){
		if(this.clients_list.length!=0){
			var tabla=document.getElementById("tabla");
			this.clients_list.forEach((x)=>{var valores=Object.values(x);
											var row = tabla.insertRow();
											valores.forEach((x)=>row.insertCell().innerHTML= x);})
			return true;
		}

		else{return false}
	}

	deleteTable(){
		document.getElementById("tabla").innerHTML="";
	}
}

//---------------------------------------------------------FUNCIONES

var clients = new Clients();


var clean =()=> {document.getElementById("id").value="";
					document.getElementById("dni").value="";
					document.getElementById("nombre").value="";
					document.getElementById("direccion").value="";
					document.getElementById("edad").value="";
					document.getElementById("residente").value="";}

var buttons=()=>{

	clean();

	document.getElementById("residente").addEventListener("click",()=>residente.value="Sí");

	document.getElementById("noResidente").addEventListener("click",()=>residente.value="No");
	
	//-----------------------------------------------------------BOTONES

	//-----------------------------------------------------------BOTÓN AÑADIR
		var boton_anadir = document.getElementById("anadir");
			boton_anadir.addEventListener("click",()=>clients.add()?alert("Cliente añadido con éxito"):alert("YA EXISTE EL CLIENTE"));
					   			  		 
	//------------------------------------------------------------BOTÓN MODIFICAR
		var boton_modificar = document.getElementById("modificar");
			boton_modificar.addEventListener("click",()=>{if(clients.modify()){
														  alert("Cliente modificado con éxito");
												  		  clean();}
												  		  else{
												  		  	alert ("NO EXISTE EL CLIENTE");
												  		  }
												  		});
	//--------------------------------------------------------------BOTÓN ELIMINAR
		var boton_eliminar = document.getElementById("eliminar");
			boton_eliminar.addEventListener("click",()=>clients.delete()?alert("Cliente Eliminado"):alert("Cliente no existente"));

	//--------------------------------------------------------------BOTÓN LISTAR
		var boton_listar = document.getElementById("listar");
		boton_listar.addEventListener("click",()=>!clients.printTable()?alert("No hay datos cargados"):true);

	//--------------------------------------------------------------BOTÓN GUARDAR
		var boton_guardar = document.getElementById("guardar");
			boton_guardar.addEventListener("click",()=>clients.saveList()?alert("Lista Guardada"):alert("No se pudo guardar la lista, lista vacía"));

	//-------------------------------------------------------------BOTÓN CARGAR
		var boton_cargar = document.getElementById("cargar");
			boton_cargar.addEventListener("click",()=>clients.loadList()?alert("Lista cargada") : alert("No existen datos en el localStorage"));
	//------------------------------------------------------------BOTÓN LIMPIAR
		var boton_limpiar = document.getElementById("limpiar");
			boton_limpiar.addEventListener("click",()=>clients.emptyList())
	//------------------------------------------------------------BOTÓN BORRAR LISTA
		var boton_borrar = document.getElementById("borrar");
			boton_borrar.addEventListener("click",()=>clients.deleteTable());
	}