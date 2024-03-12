import { Component, EventEmitter, Output } from '@angular/core';
import * as XLSX from 'xlsx';

import { ToastrService } from 'ngx-toastr';
import { ExcelImportationService } from '../../services/excel-importation.service';

import {
  ExcelImport,
  ExcelImportPostResponse,
} from '../../interfaces/excel-interfaces/excel.interface';

@Component({
  selector: 'recepcion-formulario-de-importacion',
  templateUrl: './formulario-de-importacion.component.html',
  styleUrls: ['./formulario-de-importacion.component.scss'],
})
export class FormularioDeImportacionComponent {
  excelData: any[][] = [];

  jsonArreglo: ExcelImport[] = [];

  constructor(
    public excelImporationService: ExcelImportationService,
    private toast: ToastrService
  ) {}

  @Output()
  public importExcel: EventEmitter<ExcelImport[]> = new EventEmitter();

  @Output()
  public response: EventEmitter<any> = new EventEmitter();

  private showMessageError(message: string) {
    this.toast.error(message);
  }

  private showMessageSuccess(message: string) {
    this.toast.success(message);
  }

  //NEW
  fileChange(event: any) {
    const filePicker = event.target;
    const file = filePicker.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];
        this.excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        this.jsonArreglo = this.excelImporationService.convertArrToJson(this.excelData);

        this.excelImporationService
          .sendImportationExcelData(this.jsonArreglo)
          .subscribe((response: ExcelImportPostResponse) => {
            if (response.resultado?.codigo === '2000') {
              this.showMessageSuccess('Importación Exitosa');
              const excelImportation =
                this.excelImporationService.convertResponseToImportationExcel(response);
              this.response.emit(response);
              this.importExcel.emit(excelImportation);
            } else if (response.resultado?.codigo === '2001') {
              this.showMessageError('Error: Existe una caja con ese nombre');
            } else {
              this.showMessageError('Error: Respuesta Inesperada del Servidor');
              console.log(response);
            }
          });
      };
      filePicker.value = '';
      reader.readAsArrayBuffer(file);
    }
  }
}
