import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformeProduccionComponent } from './informe-produccion/informe-produccion.component';
import { LogSistemaComponent } from './log-sistema/log-sistema.component';
import { ReporteDeEnviosComponent } from './reporte-de-envios/reporte-de-envios.component';

const routes: Routes = [
  { path: 'informe-produccion', component: InformeProduccionComponent },
  { path: 'log-sistema', component: LogSistemaComponent },
  { path: 'reporte-de-envios', component: ReporteDeEnviosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteRoutingModule {}
