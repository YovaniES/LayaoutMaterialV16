import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignacionDePermisosComponent } from './asignacion-de-permisos/asignacion-de-permisos.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { AccesosAEmpresasComponent } from './acceso-a-empresas/acceso-a-empresas.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { AdministracionDeContrasenasComponent } from './administracion-de-contrasenas/administracion-de-contrasenas.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';

@NgModule({
  declarations: [
    AsignacionDePermisosComponent,
    AccesosAEmpresasComponent,
    CambiarClaveComponent,
    AdministracionDeContrasenasComponent,
    CerrarSesionComponent,
  ],
  imports: [CommonModule, SistemaRoutingModule],
})
export class SistemaModule {}
