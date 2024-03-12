import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutentificacionDeFedatarioComponent } from './autentificacion-de-fedatario/autentificacion-de-fedatario.component';

const routes: Routes = [{ path: '', component: AutentificacionDeFedatarioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutentificacionDeFedatarioRoutingModule {}
