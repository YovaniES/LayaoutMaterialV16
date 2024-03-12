import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevolucionComponent } from './devolucion/devolucion.component';
import { RechazoComponent } from './rechazo/rechazo.component';

const routes: Routes = [
  { path: 'devolucion', component: DevolucionComponent },
  { path: 'rechazo', component: RechazoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevolucionRoutingModule {}
