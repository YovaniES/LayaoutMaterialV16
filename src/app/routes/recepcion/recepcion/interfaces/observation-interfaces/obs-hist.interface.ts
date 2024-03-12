export interface HistObsGetPostResponse {
  id: number;
  idDocu: number;
  idImagen: number | null;
  datosObservacion: DatosObservacion;
  tarea: Tarea;
  inActi: string;
  idUsuaCrea: string;
  feUsuaCrea: string;
  deTermCrea: string;
  idUsuaModi: null | string;
  feUsuaModi: null | string;
  deTermModi: null | string;
}

export interface DatosObservacion {
  id: number;
  idPadre: number;
  codigo: string;
  descripcion: string;
  idEmpresa: number;
  inActi: string;
  idUsuaCrea: string;
  feUsuaCrea: string;
  deTermCrea: string;
  idUsuaModi: null;
  feUsuaModi: null;
  deTermModi: null;
}

export interface Tarea {
  id: string;
  idTipoTarea: number;
  descripcion: string;
  inActi: string;
  idUsuaCrea: string;
  feUsuaCrea: string;
  deTermCrea: string;
  idUsuaModi: null;
  feUsuaModi: null;
  deTermModi: null;
}

export interface ObsHistPostSend {
  idImagen: null | string;
  datosObservacion: DatosObservacionSend;
  tarea: TareaSend;
}

export interface DatosObservacionSend {
  id: string;
}

export interface TareaSend {
  id: string;
}

export interface HistObs {
  id: number;
  idDocu: number;
  idEmpaque: number;
  idObservacion: number;
  inActi: string;
  descripcion: string;
}
