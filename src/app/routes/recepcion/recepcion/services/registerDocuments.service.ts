import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, of } from 'rxjs';
import { Document } from '../interfaces/document-interfaces/document.interface';
import { Box } from '../interfaces/box-interfaces/box.interfaces';

@Injectable({ providedIn: 'root' })
export class RegisterDocumentsService {
  private apiRUL: string = 'http://182.160.28.232:5003/proceso/estado-documento/v1';
  constructor(private http: HttpClient) {}

  public updateStatusDocument(idDocument: number) {
    const headers = new HttpHeaders()
      .set('idCliente', 'SUNR')
      .set('idUsuario', 'deolivera')
      .set('idAplicacion', 'RECE')
      .set('Content-type', 'application/json');

    const apiUrlPacth = this.apiRUL + '/' + idDocument;

    const obj = {
      estado: {
        codigo: 'recibido',
      },
    };

    return this.http.patch(apiUrlPacth, obj, { headers }).pipe(catchError(() => of()));
  }

  public searchDocumentId(numSerieDocumental: string, dataSourceArrDocuments: Document[]) {
    let idDocument: number = -1;
    for (const document of dataSourceArrDocuments) {
      if (document.numSerieDocu === numSerieDocumental) {
        idDocument = document.id;
      }
    }
    return idDocument;
  }

  //get the count of documents pending vs count of total documents
  getDocumentsRegisterPending(arrDocuments: Document[]) {
    let information = '00';
    const qTotal: number = arrDocuments.length;
    let qReceived: number = 0;
    for (const document of arrDocuments) {
      if (document.estado === 'recibido') {
        qReceived = qReceived + 1;
      }
    }
    information = qReceived.toString() + '/' + qTotal.toString();
    return information;
  }

  //register an document that was registered from de list and change the state to 'recibido'
  registerIdDocument(numSerieDocu: string, arrDocuments: Document[], arrBoxes: Box[]) {
    let x = 0;
    let disabledButton = true;
    for (const document of arrDocuments) {
      if (document.numSerieDocu === numSerieDocu) {
        arrDocuments[x].estado = 'recibido';
        const idBox = arrDocuments[x].idEmpaque;
        disabledButton = this.validateBoxOfDocuments(idBox, arrDocuments, arrBoxes);
      }
      x = x + 1;
    }
    return disabledButton;
  }

  //validates if all docs of a box has a states of 'recibido', the box state's change to 'recibido'
  private validateBoxOfDocuments(idCaja: number, arrDocuments: Document[], arrBoxes: Box[]) {
    let qDocsGroupByBox = 0;
    let qEstadoRecibido = 0;
    let i = 0;
    const qBoxes = arrBoxes.length;
    let qBoxesRecibido = 0;

    for (const document of arrDocuments) {
      if (document.idEmpaque === idCaja) {
        qDocsGroupByBox = qDocsGroupByBox + 1;
      }
    }

    for (const document of arrDocuments) {
      if (document.estado === 'recibido' && document.idEmpaque === idCaja) {
        qEstadoRecibido = qEstadoRecibido + 1;
      }
    }

    if (qEstadoRecibido === qDocsGroupByBox && qEstadoRecibido > 0) {
      for (const box of arrBoxes) {
        if (box.id === idCaja) {
          arrBoxes[i].estado = 'recibido';
        }
        i = i + 1;
      }
    }

    for (const box of arrBoxes) {
      if (box.estado === 'recibido') {
        qBoxesRecibido = qBoxesRecibido + 1;
      }
    }

    if (qBoxesRecibido === qBoxes) {
      return false;
    }
    return true;
  }
}
