import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './Modulos/principal.component';
import { DashboardComponent } from './Modulos/dashboard/dashboard.component';
import { LoginComponent } from './Modulos/login/login.component';
import { UsuariosComponent } from './Modulos/usuarios/usuarios.component';
import { ProductosComponent } from './Modulos/productos/productos.component';
import { VentasComponent } from './Modulos/ventas/ventas.component';
import { ValidaruserGuard } from './guards/validaruser.guard';


const routes: Routes = [
{
path: '', component: PrincipalComponent,
canActivate: [ValidaruserGuard],
 children: [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ventas', component: VentasComponent },
  { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
 ]
},
{ path: 'login', component: LoginComponent },
];

//const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
