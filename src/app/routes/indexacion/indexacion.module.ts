import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexacionComponent } from './indexacion/indexacion.component';
import { IndexacionDeReprocesadosComponent } from './indexacion-de-reprocesados/indexacion-de-reprocesados.component';
import { IndexacionRoutingModule } from './indexacion-routing.module';

@NgModule({
  declarations: [IndexacionComponent, IndexacionDeReprocesadosComponent],
  imports: [CommonModule, IndexacionRoutingModule],
})
export class IndexacionModule {}
