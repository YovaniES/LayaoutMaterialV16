import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneracionDeMediosOpticosComponent } from './generacion-de-medios-opticos/generacion-de-medios-opticos.component';
import { GeneracionDeMediosOpticosRoutingModule } from './generacion-de-medios-opticos-routing.module';

@NgModule({
  declarations: [GeneracionDeMediosOpticosComponent],
  imports: [CommonModule, GeneracionDeMediosOpticosRoutingModule],
})
export class GeneracionDeMediosOpticosModule {}
