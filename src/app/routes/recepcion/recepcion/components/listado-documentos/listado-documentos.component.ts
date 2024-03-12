import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormAgregarObsComponent } from './form-agregar-obs/form-agregar-obs.component';
import { FormRechazoComponent } from './form-rechazo/form-rechazo.component';
import { FormUrgenteComponent } from './form-urgente/form-urgente.component';

import { Document } from '../../interfaces/document-interfaces/document.interface';

@Component({
  selector: 'recepcion-listado-documentos',
  templateUrl: './listado-documentos.component.html',
  styleUrls: ['./listado-documentos.component.scss'],
})
export class ListadoDocumentosComponent {
  displayedColumns = [
    'serie_documental',
    'microforma',
    'estado',
    'observaciones',
    'urgente',
    'rechazo',
  ];

  constructor(public dialog: MatDialog) {}

  @Input()
  public dataSourceDocuments: Document[] = [];

  @Output()
  public idDocument: EventEmitter<string> = new EventEmitter();

  openFormObs(document: Document) {
    const dialogRef = this.dialog.open(FormAgregarObsComponent, {
      data: { document },
    });
    dialogRef.afterClosed().subscribe(result => {
      // if (result === true) {
      //   //ELIMINAR CAMBIOS
      // } else {
      //   //GUARDAR CAMBIOS
      // }
      // if (document.haveObs === true){
      // }else{
      // }
    });
  }

  openFormUrgent(document: Document): void {
    if (document.urgent === true) {
      //Activate Urgent
      const dialogRef = this.dialog.open(FormUrgenteComponent, {
        data: { document },
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          document.urgent = true;
        } else {
          document.urgent = false;
        }
      });
    }
  }

  openFormReject(document: Document): void {
    if (document.reject === true) {
      //Activate Reject
      const dialogRef = this.dialog.open(FormRechazoComponent, {
        data: { document },
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          document.reject = true;
        } else {
          document.reject = false;
        }
      });
    }
  }
}
