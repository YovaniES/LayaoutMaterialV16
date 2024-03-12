import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  { path: 'mycomponent', component: MycomponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModuleRoutingModule {}
