import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CdkTableModule } from '@angular/cdk/table';

import { RegistroRoutingModule } from './registro-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';

import { InventarioComponent } from './inventario/inventario.component';
//MODIFICACIONES
import { FormularioDeImportacionComponent } from './recepcion/components/formulario-de-importacion/formulario-de-importacion.component';
import { ListadoCajasComponent } from './recepcion/components/listado-cajas/listado-cajas.component';
import { ListadoDocumentosComponent } from './recepcion/components/listado-documentos/listado-documentos.component';
import { RegistrarCajaComponent } from './recepcion/components/registrar-caja/registrar-caja.component';
import { RegistrarDocumentoComponent } from './recepcion/components/registrar-documento/registrar-documento.component';
import { FormAgregarObsComponent } from './recepcion/components/listado-documentos/form-agregar-obs/form-agregar-obs.component';
import { FormRechazoComponent } from './recepcion/components/listado-documentos/form-rechazo/form-rechazo.component';
import { FormUrgenteComponent } from './recepcion/components/listado-documentos/form-urgente/form-urgente.component';
import { RecepcionComponent } from './recepcion/recepcion.component';
import { SeriesPendientesComponent } from './recepcion/components/series-pendientes/series-pendientes.component';

@NgModule({
  declarations: [
    InventarioComponent,
    RecepcionComponent,
    FormularioDeImportacionComponent,
    ListadoCajasComponent,
    ListadoDocumentosComponent,
    RegistrarCajaComponent,
    RegistrarDocumentoComponent,
    FormAgregarObsComponent,
    FormRechazoComponent,
    FormUrgenteComponent,
    RegistrarCajaComponent,
    RegistrarDocumentoComponent,
    SeriesPendientesComponent,
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    SharedModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
  ],
})
export class RegistroModule {}
