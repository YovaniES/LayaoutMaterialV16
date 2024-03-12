import { Document } from '../document-interfaces/document.interface';

export interface DialogDataObs {
  document: Document;
}

export interface DialogDataReject {
  document: Document;
}

export interface DialogDataUrgent {
  document: Document;
}
