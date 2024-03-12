import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmadoComponent } from './armado/armado.component';

const routes: Routes = [{ path: '', component: ArmadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmadoRoutingModule {}
