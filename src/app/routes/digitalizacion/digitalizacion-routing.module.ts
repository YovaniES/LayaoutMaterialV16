import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaptacionDeImagenesComponent } from './captacion-de-imagenes/captacion-de-imagenes.component';
import { CargaExternaComponent } from './carga-externa/carga-externa.component';
import { DigitalizacionComponent } from './digitalizacion/digitalizacion.component';

const routes: Routes = [
  { path: 'captacion-de-imagenes', component: CaptacionDeImagenesComponent },
  { path: 'carga-externa', component: CargaExternaComponent },
  { path: 'digitalizacion', component: DigitalizacionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalizacionRoutingModule {}
