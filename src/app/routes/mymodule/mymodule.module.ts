import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { MyModuleRoutingModule } from './mymodule-routing.module';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

@NgModule({
  declarations: [
    MycomponentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyModuleRoutingModule
  ]
})

export class MymoduleModule { }
