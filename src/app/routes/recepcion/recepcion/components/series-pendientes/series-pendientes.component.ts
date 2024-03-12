import { Component, Input } from '@angular/core';

@Component({
  selector: 'recepcion-series-pendientes',
  templateUrl: './series-pendientes.component.html',
  styleUrls: ['./series-pendientes.component.scss'],
})
export class SeriesPendientesComponent {
  @Input() informationReceive: string = '';
}
