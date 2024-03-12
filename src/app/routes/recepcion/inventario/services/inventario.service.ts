import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Caja } from '../interfaces/info-caja.interface';
import { BoxInventory } from '../interfaces/inventario.interface';
import { ResponseGetCaja } from '../interfaces/response-get-caja-interface';

@Injectable({ providedIn: 'root' })
export class InventarioService {
  private apiUrl: string = 'http://182.160.28.232:5003/proceso/empaque/v1';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    idCliente: '1',
    idUsuario: 'deolivera',
    idAplicacion: 'parametros',
  });

  public getInfoCaja(numPaquete: string): Observable<ResponseGetCaja> {
    const apiGet = this.apiUrl + '/' + numPaquete;
    return this.http
      .get<ResponseGetCaja>(apiGet, { headers: this.headers })
      .pipe(catchError(() => of()));
  }

  public saveInventario(boxInventory: BoxInventory) {
    const apiPatch = this.apiUrl;
    const cadenaEnvio = [
      {
        numEmpaque: boxInventory.numCaja,
        coAnaquel: boxInventory.idAnaquel,
        coLado: boxInventory.lado,
        coFila: boxInventory.idFila,
        coColumna: boxInventory.idColumna,
      },
    ];
    return this.http.patch(apiPatch, cadenaEnvio, { headers: this.headers });
  }
}
