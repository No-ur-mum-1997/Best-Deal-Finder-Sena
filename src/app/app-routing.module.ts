import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './Modulos/principal.component';
import { DashboardComponent } from './Modulos/dashboard/dashboard.component';
import { LoginComponent } from './Modulos/login/login.component';


const routes: Routes = [
{
path: '', component: PrincipalComponent,
 children: [
  { path: 'dashboard', component: DashboardComponent },
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
