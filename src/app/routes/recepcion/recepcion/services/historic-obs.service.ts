import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import {
  HistObs,
  HistObsGetPostResponse,
} from '../interfaces/observation-interfaces/obs-hist.interface';
import { Document } from '../interfaces/document-interfaces/document.interface';

@Injectable({ providedIn: 'root' })
export class HistoricObsService {
  private apiUrl: string = 'http://182.160.28.232:5004/documento/v1';
  historicObsSession: HistObs[] = [];

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    idCliente: '1',
    idUsuario: 'deolivera',
    idAplicacion: 'observacion',
  });

  //Get all the observations of a specific document
  getHistObsRequest(idDocu: number): Observable<HistObsGetPostResponse[]> {
    const url = this.apiUrl + '/' + idDocu + '/observacion';
    return this.http
      .get<HistObsGetPostResponse[]>(url, { headers: this.headers })
      .pipe(catchError(() => of([])));
  }

  convertGetApiToHistoricSession(historicObsApi: HistObsGetPostResponse[], document: Document) {
    const newArrayFiltered: HistObs[] = [];
    const newArray: HistObs[] = historicObsApi.map(item => {
      return {
        id: item.id,
        idDocu: item.idDocu,
        idEmpaque: document.idEmpaque,
        idObservacion: item.datosObservacion.id,
        descripcion: item.datosObservacion.descripcion,
        inActi: item.inActi,
      };
    });
    //Only show the observation actives
    for (const obj of newArray) {
      if (obj.inActi === 'A') {
        newArrayFiltered.push(obj);
      }
    }
    return newArrayFiltered;
  }

  //Add new obs to the historic from de the session
  // pushToHistoricObsSession(obs: ObservacionDB, document: DocumentoDB) {
  //   const objectObs = {
  //     idDocu: document.id,
  //     idObservacion: obs.id,
  //     descripcionObs: obs.descripcion,
  //   };

  //   this.historicObsSession = [...this.historicObsSession, objectObs];
  // }

  //Delete specific obs from the historic of the session
  deleteFromHistoricObsSession(obs: HistObs, document: Document) {
    const deleteItem: HistObs = {
      idEmpaque: obs.idEmpaque,
      idDocu: obs.idDocu,
      idObservacion: obs.idObservacion,
      id: obs.id,
      inActi: obs.inActi,
      descripcion: obs.descripcion,
    };

    // const arregloInterno: HistorialObservacion[] =
  }

  //  postHistoricObsApi(obj: any): Observable<ResponseHistoricPost> {
  postHistoricObsApi(idDocu: number, idObs: number): Observable<HistObsGetPostResponse> {
    const headers = new HttpHeaders()
      .set('idUsuario', 'deolivera')
      .set('idCliente', '1')
      .set('idAplicacion', 'observacion')
      .set('Content-type', 'application/json');

    const idDocument = idDocu;
    const urlPostObs = this.apiUrl + '/' + idDocument + '/observacion';
    const cadenaEnvio = {
      idImagen: null,
      datosObservacion: { id: idObs },
      tarea: { id: 'RECE' },
    };
    return this.http.post<HistObsGetPostResponse>(urlPostObs, cadenaEnvio, { headers });
  }

  deleteHistoricObsApi(
    // obj: ArregloObsCambiar
    idHistoric: any
  ) {
    const headers = new HttpHeaders()
      .set('idUsuario', 'deolivera')
      .set('idCliente', '1')
      .set('idAplicacion', 'observacion')
      .set('Content-type', 'application/json');

    const idObs = idHistoric;
    const urlDeleteObs = this.apiUrl + '/historial-observacion/' + idObs;

    return this.http.delete(urlDeleteObs, { headers });
  }
}
