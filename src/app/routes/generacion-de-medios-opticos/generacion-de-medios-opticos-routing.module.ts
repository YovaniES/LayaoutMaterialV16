import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneracionDeMediosOpticosComponent } from './generacion-de-medios-opticos/generacion-de-medios-opticos.component';

const routes: Routes = [{ path: '', component: GeneracionDeMediosOpticosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneracionDeMediosOpticosRoutingModule {}
