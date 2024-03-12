import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogDataReject } from '../../../interfaces/dialog-data-interfaces/dialog-data.interfaces';

@Component({
  selector: 'app-form-rechazo',
  templateUrl: './form-rechazo.component.html',
  styleUrls: ['./form-rechazo.component.scss'],
})
export class FormRechazoComponent {
  constructor(
    private dialogRef: MatDialogRef<FormRechazoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataReject
  ) {}

  saveUrgent() {
    this.data.document.urgent = true;
  }

  cancelSave() {
    this.data.document.urgent = true;
    this.dialogRef.close();
  }
}
