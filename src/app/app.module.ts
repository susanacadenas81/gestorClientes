import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistrarClienteComponent } from './componentes/registrar-cliente/registrar-cliente.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { BorrarClienteComponent } from './componentes/borrar-cliente/borrar-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegistrarClienteComponent,
    ClientesComponent,
    BorrarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
