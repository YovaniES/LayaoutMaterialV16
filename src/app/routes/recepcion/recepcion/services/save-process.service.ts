import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { OrdenResponse } from '../interfaces/orden-interfaces/orden-inteface';

@Injectable({ providedIn: 'root' })
export class SaveProcessService {
  private apiURL: string = 'http://182.160.28.232:5003/proceso/control/v1';

  constructor(private http: HttpClient) {}

  public postSaveProcess(responseValue: string): Observable<OrdenResponse> {
    const headers = new HttpHeaders()
      .set('idCliente', 'SUNR')
      .set('idUsuario', 'deolivera')
      .set('idAplicacion', 'RECE')
      .set('Content-type', 'application/json');

    const obj = {
      numEnvio: responseValue,
      numEmpaque: '',
      coTarea: 'RECE',
    };
    return this.http.post<OrdenResponse>(this.apiURL, obj, { headers });
  }
}
