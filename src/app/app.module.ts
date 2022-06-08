import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from "@angular/common/http";
import { APP_ROUTING } from './app.routes';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './usuario.service';
import { MenuOpcionesComponent } from './components/menu-opciones/menu-opciones.component';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuOpcionesComponent,
    AgregarEmpleadoComponent,
    ContratacionComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
