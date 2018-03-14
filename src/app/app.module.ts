import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegistrarClienteComponent } from './componentes/registrar-cliente/registrar-cliente.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    RegistrarClienteComponent,
    ClientesComponent
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
