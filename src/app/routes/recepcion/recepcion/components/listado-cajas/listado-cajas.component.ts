import { Component, Input } from '@angular/core';

import { Box } from '../../interfaces/box-interfaces/box.interfaces';

@Component({
  selector: 'recepcion-listado-cajas',
  templateUrl: './listado-cajas.component.html',
  styleUrls: ['./listado-cajas.component.scss'],
})
export class ListadoCajasComponent {
  displayedColumns = ['numEmpaque', 'estado'];

  //New version 2.0 of
  @Input()
  public arrBoxes: Box[] = [];

  //New version 2.0 of
  public arrDocuments: Document[] = [];
}
