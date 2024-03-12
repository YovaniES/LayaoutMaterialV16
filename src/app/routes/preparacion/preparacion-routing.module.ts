import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreparacionComponent } from './preparacion/preparacion.component';

const routes: Routes = [{ path: '', component: PreparacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreparacionRoutingModule {}
