import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { MtxDialog } from '@ng-matero/extensions/dialog';

import { ToastrService } from 'ngx-toastr';
import { CatalogObsService } from 'app/routes/recepcion/recepcion/services/catalog-obs.service';
import { HistoricObsService } from '../../../services/historic-obs.service';

import { CatalogObs } from '../../../interfaces/observation-interfaces/obs-catalog.interface';
import { DialogDataObs } from '../../../interfaces/dialog-data-interfaces/dialog-data.interfaces';
import { HistObs } from '../../../interfaces/observation-interfaces/obs-hist.interface';

@Component({
  selector: 'docs-form-agregar-obs',
  templateUrl: './form-agregar-obs.component.html',
  styleUrls: ['./form-agregar-obs.component.scss'],
})
export class FormAgregarObsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'observacion', 'fecha', 'usuario', 'accion'];
  catalogObs: CatalogObs[] = [];
  selectedOption!: CatalogObs;
  columns: MtxGridColumn[] = [
    { header: 'Caja', field: 'idEmpaque', minWidth: 100 },
    { header: 'Serie Documental', field: 'idDocu', minWidth: 100 },
    { header: 'Observacion', field: 'descripcion', minWidth: 100 },
    {
      header: 'Eliminar',
      field: 'eliminar',
      minWidth: 200,
      type: 'button',
      pinned: 'right',
      width: '140px',
      buttons: [
        {
          type: 'icon',
          icon: 'delete_forever',
          color: 'warn',
          class: 'icon-obs',
          pop: {
            title: '¿Estas seguro de eliminar?',
            closeText: 'Cerrar',
            okText: 'Aceptar',
          },
          tooltip: 'Eliminar observacion',
          click: record => this.deleteObsOption(record),
        },
      ],
    },
  ];

  isLoading: boolean = false;
  columnResizable = false;
  hideRowSelectionCheckbox: boolean = false;
  rowHover: boolean = true;
  rowStriped: boolean = false;
  columnSortable: boolean = false;
  expandable: boolean = false;
  showPaginator: boolean = true;
  pageSize: number = 5;
  pageSizeOptions: number[] = [5];

  //This array should be show in the visual table
  histObsbyDoc: HistObs[] = [];

  constructor(
    private catalogObsService: CatalogObsService,
    private histObsService: HistoricObsService,
    public dialogRef: MatDialogRef<FormAgregarObsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataObs,
    private toast: ToastrService,
    private dialog: MtxDialog
  ) {}

  ngOnInit(): void {
    this.catalogObsService.getCatologObsRequest().subscribe((data: CatalogObs[]) => {
      this.catalogObs = data;
    });

    //NEW
    this.histObsService.getHistObsRequest(this.data.document.id).subscribe(dataApi => {
      this.histObsbyDoc = this.histObsService.convertGetApiToHistoricSession(
        dataApi,
        this.data.document
      );
      if (this.histObsbyDoc.length > 0) {
        // if length is more than 0, change the color of button to yellow
        this.data.document.haveObs = true;
      } else {
        // else is length is equal 0, change the color of button to blue
        this.data.document.haveObs = false;
      }
    });
  }

  private showMessageError(message: string) {
    this.toast.error(message);
  }

  private showMessageSuccess(message: string) {
    this.toast.success(message);
  }

  addObsOption() {
    //Validate that the user can't send duplicate
    let duplicateObs: boolean = false;
    for (const obs of this.histObsbyDoc) {
      if (obs.idObservacion === this.selectedOption.id) {
        duplicateObs = true;
      }
    }
    if (duplicateObs === false) {
      //TODO THE API POST
      this.histObsService
        .postHistoricObsApi(this.data.document.id, this.selectedOption.id)
        .subscribe(response => {
          const objJsonHistoric: HistObs = {
            idEmpaque: this.data.document.idEmpaque,
            idDocu: response.idDocu,
            idObservacion: response.datosObservacion.id,
            descripcion: response.datosObservacion.descripcion,
            id: response.id,
            inActi: response.inActi,
          };
          this.histObsbyDoc = [...this.histObsbyDoc, objJsonHistoric];
          if (this.histObsbyDoc.length > 0) {
            /// if length is more than 0, change the color of button to yellow
            this.data.document.haveObs = true;
          } else {
            // else is length is equal 0, change the color of button to blue
            this.data.document.haveObs = false;
          }
        });
    } else {
      this.showMessageError('Error: Esta observación ya está agregada');
    }
  }

  deleteObsOption(obs: HistObs) {
    const deleteItem: HistObs = {
      id: obs.id,
      idDocu: obs.idDocu,
      idEmpaque: obs.idEmpaque,
      idObservacion: obs.idObservacion,
      inActi: obs.inActi,
      descripcion: obs.descripcion,
    };
    this.histObsService.deleteHistoricObsApi(obs.id).subscribe(response => {
      let arregloInterno: HistObs[] = this.histObsbyDoc;
      arregloInterno = arregloInterno.filter(obj => !this.validateEqual(obj, deleteItem));
      this.histObsbyDoc = arregloInterno;
      if (this.histObsbyDoc.length > 0) {
        /// if length is more than 0, change the color of button to yellow
        this.data.document.haveObs = true;
      } else {
        // else is length is equal 0, change the color of button to blue
        this.data.document.haveObs = false;
      }
    });
  }

  private validateEqual(obj1: any, obj2: any): boolean {
    return (
      obj1.idDocu === obj2.idDocu &&
      obj1.idEmpaque === obj2.idEmpaque &&
      obj1.descripcion === obj2.descripcion
    );
  }
}
