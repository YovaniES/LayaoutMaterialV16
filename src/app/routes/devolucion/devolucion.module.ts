import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { RechazoComponent } from './rechazo/rechazo.component';
import { DevolucionRoutingModule } from './devolucion-routing.module';

@NgModule({
  declarations: [DevolucionComponent, RechazoComponent],
  imports: [CommonModule, DevolucionRoutingModule],
})
export class DevolucionModule {}
