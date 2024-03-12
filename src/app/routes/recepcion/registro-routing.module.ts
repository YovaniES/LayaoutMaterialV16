import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecepcionComponent } from './recepcion/recepcion.component';
import { InventarioComponent } from './inventario/inventario.component';

const routes: Routes = [
  { path: 'recepcion', component: RecepcionComponent },
  { path: 'inventario', component: InventarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroRoutingModule {}
