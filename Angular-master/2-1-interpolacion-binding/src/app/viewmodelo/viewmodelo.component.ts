import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})

export class ViewmodeloComponent implements OnInit {

  alumno1 = new Alumno (1, 'Juan', 'Gutiérrez', 'Madrid');
  alumno2 = new Alumno (2, 'Ezequiel', 'Llarena', 'Madrid');

  constructor() { }

  ngOnInit() {
  }

}
