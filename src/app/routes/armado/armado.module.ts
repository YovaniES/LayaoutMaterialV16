import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmadoComponent } from './armado/armado.component';
import { ArmadoRoutingModule } from './armado-routing.module';

@NgModule({
  declarations: [ArmadoComponent],
  imports: [CommonModule, ArmadoRoutingModule],
})
export class ArmadoModule {}
