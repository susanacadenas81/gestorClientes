import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent{

  dni:string=""
  nombre:String=""
  direccion:String=""
  edad:Number=0
  residente:Boolean=false

  constructor() { }
  noresidente(){
  	this.residente=false;
  }

  reg(){
	alert(this.residente);
  }
}
