//Convert Array[][] to Json with interface ExcelImport
export interface ExcelImport {
  //The id of the document
  id: number;
  empresa: string;
  area: string;
  num_empaque: string;
  num_serie_documental: string;
  num_paquete: string;
  microforma: string;
  tipo_documento: string;
  num_folios: string;
  id_empaque: number;
}

export interface ExcelImportPostResponse {
  resultado?: {
    codigo?: string;
    detalle?: string;
    mensaje?: string;
  };
  orden?: {
    numEnvio?: string;
    areaOrigen?: Codigo;
    tipoMifoOrigen?: Codigo;
    estado?: Codigo;
    listEmpaque?: ListEmpaque[];
  };
}

export interface Codigo {
  codigo: string;
}

export interface ListEmpaque {
  id: number;
  numEmpaque: string;
  estado: Estado;
  listDocumento: ListDocumento[];
}

export interface Estado {
  codigo: string;
  descripcion: string;
}

export interface ListDocumento {
  id: number;
  tipoDocu: Codigo;
  areaOrigen: Codigo;
  numSerieDocu: string;
  numPaquete: string;
  numFolios: string;
  estado: Estado;
}
