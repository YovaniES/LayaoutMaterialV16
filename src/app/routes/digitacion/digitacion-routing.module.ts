import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitacionComponent } from './digitacion/digitacion.component';

const routes: Routes = [{ path: '', component: DigitacionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitacionRoutingModule {}
