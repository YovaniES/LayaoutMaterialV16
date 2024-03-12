import { Component, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { RegisterDocumentsService } from '../../services/registerDocuments.service';

import { Document } from '../../interfaces/document-interfaces/document.interface';

@Component({
  selector: 'recepcion-registrar-documento',
  templateUrl: './registrar-documento.component.html',
  styleUrls: ['./registrar-documento.component.scss'],
})
export class RegistrarDocumentoComponent {
  @Output()
  public idDocumento: EventEmitter<string> = new EventEmitter();

  @Output()
  public informacionPendiente: EventEmitter<string> = new EventEmitter();

  @Input()
  public dSArrDocuments: Document[] = [];

  @ViewChild('txtInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private registerDocumentService: RegisterDocumentsService,
    private toast: ToastrService
  ) {}

  private showMessageError(message: string) {
    this.toast.error(message);
  }

  private showMessageSuccess(message: string) {
    this.toast.success(message);
  }

  evaluateSerieDocumental(numSerieDoc: string) {
    let idDocument: number = 0;
    idDocument = this.registerDocumentService.searchDocumentId(numSerieDoc, this.dSArrDocuments);
    if (idDocument !== -1) {
      this.registerDocumentService.updateStatusDocument(idDocument).subscribe();
      this.idDocumento.emit(numSerieDoc);
      this.showMessageSuccess('Serie Documental Registrado');
    } else {
      this.showMessageError('ERROR: Serie Documental no existe');
    }
    this.tagInput.nativeElement.value = '';
  }
}
