import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlCalidadDocumentosComponent } from './control-calidad-documentos/control-calidad-documentos.component';
import { ControlDeCalidadDigitacionComponent } from './control-de-calidad-digitacion/control-de-calidad-digitacion.component';
import { ControlCalidadMedioOpticoComponent } from './control-calidad-medio-optico/control-calidad-medio-optico.component';
import { ControlDeCalidadRoutingModule } from './control-de-calidad-routing.module';

@NgModule({
  declarations: [
    ControlCalidadDocumentosComponent,
    ControlDeCalidadDigitacionComponent,
    ControlCalidadMedioOpticoComponent,
  ],
  imports: [CommonModule, ControlDeCalidadRoutingModule],
})
export class ControlDeCalidadModule {}
