import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitacionComponent } from './digitacion/digitacion.component';
import { DigitacionRoutingModule } from './digitacion-routing.module';

@NgModule({
  declarations: [DigitacionComponent],
  imports: [CommonModule, DigitacionRoutingModule],
})
export class DigitacionModule {}
