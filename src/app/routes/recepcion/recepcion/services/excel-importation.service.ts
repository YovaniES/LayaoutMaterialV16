import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
  ExcelImport,
  ExcelImportPostResponse,
} from '../interfaces/excel-interfaces/excel.interface';
import { Document } from '../interfaces/document-interfaces/document.interface';
import { Box } from '../interfaces/box-interfaces/box.interfaces';

@Injectable({ providedIn: 'root' })
export class ExcelImportationService {
  private apiURL: string = 'http://182.160.28.232:5003/proceso/orden/v1';

  constructor(private http: HttpClient) {}

  convertArrToJson(excelData: string[][]) {
    const headers = [
      'empresa',
      'area',
      'num_empaque',
      'num_serie_documental',
      'num_paquete',
      'microforma',
      'tipo_documento',
      'num_folios',
    ];
    const arrayJson: ExcelImport[] = [];

    for (let i = 1; i < excelData.length; i++) {
      const jsonObject: any = {};
      for (let j = 0; j < headers.length; j++) {
        jsonObject[headers[j].toLocaleLowerCase()] = excelData[i][j].toString();
      }
      arrayJson.push(jsonObject);
    }
    return arrayJson;
  }

  public sendImportationExcelData(importationExcel: ExcelImport[]) {
    //configurar encabezado
    const headers = new HttpHeaders()
      .set('idCliente', 'SUNR')
      .set('idUsuario', 'deolivera')
      .set('idAplicacion', 'RECE')
      .set('Content-type', 'application/json');

    //Realizar solicitud POST con los encabezados y datos - Version Final
    const cadenaEnvio = this.buildStringPost(importationExcel);

    return this.http.post(this.apiURL, cadenaEnvio, { headers });
  }

  private buildStringPost(importationExcel: ExcelImport[]) {
    const agrupado: Record<string, any> = {
      areaOrigen: {},
      tipoMifoOrigen: {},
      estado: { codigo: 'registrado' },
      listEmpaque: [],
    };

    importationExcel.forEach(item => {
      const {
        area,
        num_empaque,
        num_serie_documental,
        num_paquete,
        microforma,
        tipo_documento,
        num_folios,
      } = item;

      if (!agrupado.areaOrigen.codigo) {
        agrupado.areaOrigen.codigo = area;
        agrupado.tipoMifoOrigen.codigo = microforma;
      }

      const indexEmpaque = agrupado.listEmpaque.findIndex((e: any) => e.numEmpaque === num_empaque);

      if (indexEmpaque === -1) {
        agrupado.listEmpaque.push({
          numEmpaque: num_empaque,
          estado: { codigo: 'declarado' },
          listDocumento: [
            {
              tipoDocu: { codigo: tipo_documento },
              numSerieDocu: num_serie_documental,
              numPaquete: num_paquete,
              numFolios: num_folios,
              estado: { codigo: 'declarado' },
            },
          ],
        });
      } else {
        agrupado.listEmpaque[indexEmpaque].listDocumento.push({
          tipoDocu: { codigo: tipo_documento },
          numSerieDocu: num_serie_documental,
          numPaquete: num_paquete,
          numFolios: num_folios,
          estado: { codigo: 'declarado' },
        });
      }
    });
    return agrupado;
  }

  convertResponseToImportationExcel(objResponse: ExcelImportPostResponse) {
    const objImportExcel: ExcelImport[] = [];

    if (objResponse.orden?.listEmpaque) {
      objResponse.orden.listEmpaque.forEach(empaque => {
        empaque.listDocumento.forEach(documento => {
          if (objResponse.orden?.areaOrigen && objResponse.orden.tipoMifoOrigen) {
            const newObj: ExcelImport = {
              id: documento.id,
              empresa: 'SUNR',
              area: objResponse.orden.areaOrigen.codigo,
              id_empaque: empaque.id,
              num_serie_documental: documento.numSerieDocu,
              num_paquete: documento.numPaquete,
              microforma: objResponse.orden.tipoMifoOrigen.codigo,
              tipo_documento: documento.tipoDocu.codigo,
              num_folios: documento.numFolios,
              num_empaque: empaque.numEmpaque,
            };
            objImportExcel.push(newObj);
          }
        });
      });
    }
    return objImportExcel;
  }

  generateArrBox(importExcel: ExcelImport[]) {
    const setBox = new Set<Box>();
    const arrBox: Box[] = [];

    importExcel.forEach(item => {
      if (![...setBox].some(box => box.id === item.id_empaque)) {
        const box: Box = {
          id: item.id_empaque,
          estado: 'declarado',
          numEmpaque: item.num_empaque,
        };
        arrBox.push(box);
        setBox.add(box);
      }
    });
    return arrBox;
  }

  //generate an array of documents from de json that was converted
  generateArrDocuments(importExcel: ExcelImport[]) {
    const arrDocuments: Document[] = [];
    importExcel.forEach(item => {
      const document: Document = {
        numSerieDocu: item.num_serie_documental,
        estado: 'declarado',
        idEmpaque: item.id_empaque,
        microforma: item.microforma,
        id: item.id,
        urgent: false,
        reject: false,
        numEmpaque: item.num_empaque,
        haveObs: false,
      };
      arrDocuments.push(document);
    });
    return arrDocuments;
  }
}
