import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './componentes/homepage/homepage.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { RegistrarClienteComponent } from './componentes/registrar-cliente/registrar-cliente.component';
import { BorrarClienteComponent } from './componentes/borrar-cliente/borrar-cliente.component';

const routes: Routes = [
{path: '',component:HomepageComponent},
{path: 'homepage',component:HomepageComponent},
{path:'clientes',component:ClientesComponent},
{path:'registrar',component:RegistrarClienteComponent},
{path:'borrar',component:BorrarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
