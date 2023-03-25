import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Estructura/header/header.component';
import { NavComponent } from './Estructura/nav/nav.component';
import { FooterComponent } from './Estructura/footer/footer.component';
import { PrincipalComponent } from './Modulos/principal.component';
import { DashboardComponent } from './Modulos/dashboard/dashboard.component';
import { LoginComponent } from './Modulos/login/login.component';
import { UsuariosComponent } from './Modulos/usuarios/usuarios.component';
import { ProductosComponent } from './Modulos/productos/productos.component';
import { VentasComponent } from './Modulos/ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    PrincipalComponent,
    DashboardComponent,
    LoginComponent,
    UsuariosComponent,
    ProductosComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
