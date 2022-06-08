import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MenuOpcionesComponent } from "./components/menu-opciones/menu-opciones.component";
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { ContratacionComponent } from "./components/contratacion/contratacion.component";

const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'menu_opciones', component: MenuOpcionesComponent},
    {path: 'agregarEmpleado', component: AgregarEmpleadoComponent},
    {path: 'generarContrato', component: ContratacionComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'login'}
]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);