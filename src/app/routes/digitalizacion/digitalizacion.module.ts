import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptacionDeImagenesComponent } from './captacion-de-imagenes/captacion-de-imagenes.component';
import { DigitalizacionComponent } from './digitalizacion/digitalizacion.component';
import { CargaExternaComponent } from './carga-externa/carga-externa.component';
import { DigitalizacionRoutingModule } from './digitalizacion-routing.module';

@NgModule({
  declarations: [CaptacionDeImagenesComponent, DigitalizacionComponent, CargaExternaComponent],
  imports: [CommonModule, DigitalizacionRoutingModule],
})
export class DigitalizacionModule {}
