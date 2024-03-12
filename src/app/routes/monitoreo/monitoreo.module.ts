import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoreoComponent } from './monitoreo/monitoreo.component';
import { MonitoreoRoutingModule } from './monitoreo-routing.module';

@NgModule({
  declarations: [MonitoreoComponent],
  imports: [CommonModule, MonitoreoRoutingModule],
})
export class MonitoreoModule {}
