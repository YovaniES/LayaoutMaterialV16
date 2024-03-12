import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { SaveProcessService } from './services/save-process.service';

import { ExcelImport } from './interfaces/excel-interfaces/excel.interface';
import { Box } from './interfaces/box-interfaces/box.interfaces';
import { Document } from './interfaces/document-interfaces/document.interface';
import { ExcelImportationService } from './services/excel-importation.service';
import { RegisterDocumentsService } from './services/registerDocuments.service';

@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css'],
})
export class RecepcionComponent {
  public dataSourceArrBoxes: Box[] = [];
  public dataSourceArrDocuments: Document[] = [];
  public responseValue = '';
  public disableButton = true;
  public informationReceive = '-/-';

  public hideInputsDocs: boolean = false;
  public hideTables: boolean = false;

  constructor(
    private saveProcessService: SaveProcessService,
    private excelImportationService: ExcelImportationService,
    private registerDocumentsService: RegisterDocumentsService,
    private toast: ToastrService
  ) {}

  //With the import excel transform into a dataSource of Boxes and Documents
  importExcel(arrImportation: ExcelImport[]): void {
    this.dataSourceArrBoxes = this.excelImportationService.generateArrBox(arrImportation);
    this.dataSourceArrDocuments = this.excelImportationService.generateArrDocuments(arrImportation);
    this.informationReceive = this.registerDocumentsService.getDocumentsRegisterPending(
      this.dataSourceArrDocuments
    );
    this.hideInputsDocs = true;
  }

  //Receive the response of the server when you send the importation
  receiveResponseImportExcel(response: any): void {
    this.responseValue = response.orden.numEnvio;
  }

  //Register documents with the barcode
  registerDocument(idDocumento: string): void {
    this.disableButton = this.registerDocumentsService.registerIdDocument(
      idDocumento,
      this.dataSourceArrDocuments,
      this.dataSourceArrBoxes
    );
    this.informationReceive = this.registerDocumentsService.getDocumentsRegisterPending(
      this.dataSourceArrDocuments
    );
    this.hideTables = true;
  }

  private showMessageError(message: string) {
    this.toast.error(message);
  }

  private showMessageSuccess(message: string) {
    this.toast.success(message);
  }

  finishProcess(responseValue: string) {
    this.saveProcessService.postSaveProcess(responseValue).subscribe(response => {
      this.dataSourceArrBoxes = [];
      this.dataSourceArrDocuments = [];
      this.responseValue = '';
      if (response.codigo === 200) {
        this.showMessageSuccess('PROCESO TERMINADO');
        this.informationReceive = '-/-';
      } else {
        this.showMessageError('Error: No se guardó correctamente');
      }
    });
  }
}
