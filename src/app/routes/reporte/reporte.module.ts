import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogSistemaComponent } from './log-sistema/log-sistema.component';
import { ReporteDeEnviosComponent } from './reporte-de-envios/reporte-de-envios.component';
import { InformeProduccionComponent } from './informe-produccion/informe-produccion.component';
import { ReporteRoutingModule } from './reporte-routing.module';

@NgModule({
  declarations: [LogSistemaComponent, ReporteDeEnviosComponent, InformeProduccionComponent],
  imports: [CommonModule, ReporteRoutingModule],
})
export class ReporteModule {}
