import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsElementsComponent } from './elements/elements.component';
import { FormsSelectComponent } from './select/select.component';

const routes: Routes = [
  { path: 'elements', component: FormsElementsComponent },
  { path: 'select', component: FormsSelectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
