import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionDePermisosComponent } from './asignacion-de-permisos/asignacion-de-permisos.component';
import { AccesosAEmpresasComponent } from './acceso-a-empresas/acceso-a-empresas.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { AdministracionDeContrasenasComponent } from './administracion-de-contrasenas/administracion-de-contrasenas.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [
  { path: 'asignacion-de-permisos', component: AsignacionDePermisosComponent },
  { path: 'acceso-a-empresas', component: AccesosAEmpresasComponent },
  { path: 'cambiar-clave', component: CambiarClaveComponent },
  { path: 'administracion-de-contrasenas', component: AdministracionDeContrasenasComponent },
  { path: 'cerrar-sesion', component: CerrarSesionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SistemaRoutingModule {}
