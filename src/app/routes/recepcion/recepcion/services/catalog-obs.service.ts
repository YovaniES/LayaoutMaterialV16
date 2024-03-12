import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { CatalogObs } from '../interfaces/observation-interfaces/obs-catalog.interface';

@Injectable({ providedIn: 'root' })
export class CatalogObsService {
  private apiUrl: string = 'http://182.160.28.232:5002/parametro/v1/cat-obs-rece';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    idCliente: '1',
    idUsuario: 'ajchanga',
    idAplicacion: 'parametros',
  });

  public getCatologObsRequest(): Observable<CatalogObs[]> {
    return this.http
      .get<CatalogObs[]>(this.apiUrl, { headers: this.headers })
      .pipe(catchError(() => of([])));
  }
}
