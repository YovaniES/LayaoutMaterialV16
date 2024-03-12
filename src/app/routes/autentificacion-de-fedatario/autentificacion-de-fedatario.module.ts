import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutentificacionDeFedatarioComponent } from './autentificacion-de-fedatario/autentificacion-de-fedatario.component';
import { AutentificacionDeFedatarioRoutingModule } from './autentificacion-de-fedatario-routing.module';

@NgModule({
  declarations: [AutentificacionDeFedatarioComponent],
  imports: [CommonModule, AutentificacionDeFedatarioRoutingModule],
})
export class AutentificacionDeFedatarioModule {}
