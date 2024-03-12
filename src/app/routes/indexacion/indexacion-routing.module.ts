import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexacionComponent } from './indexacion/indexacion.component';
import { IndexacionDeReprocesadosComponent } from './indexacion-de-reprocesados/indexacion-de-reprocesados.component';

const routes: Routes = [
  { path: 'indexacion', component: IndexacionComponent },
  { path: 'indexacion-de-reprocesados', component: IndexacionDeReprocesadosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexacionRoutingModule {}
