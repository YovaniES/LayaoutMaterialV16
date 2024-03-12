import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlCalidadDocumentosComponent } from './control-calidad-documentos/control-calidad-documentos.component';
import { ControlCalidadMedioOpticoComponent } from './control-calidad-medio-optico/control-calidad-medio-optico.component';
import { ControlDeCalidadDigitacionComponent } from './control-de-calidad-digitacion/control-de-calidad-digitacion.component';

const routes: Routes = [
  { path: 'control-calidad-documentos', component: ControlCalidadDocumentosComponent },
  { path: 'control-calidad-medio-optico', component: ControlCalidadMedioOpticoComponent },
  { path: 'control-de-calidad-digitacion', component: ControlDeCalidadDigitacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlDeCalidadRoutingModule {}
