import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreparacionComponent } from './preparacion/preparacion.component';
import { PreparacionRoutingModule } from './preparacion-routing.module';

@NgModule({
  declarations: [PreparacionComponent],
  imports: [CommonModule, PreparacionRoutingModule],
})
export class PreparacionModule {}
