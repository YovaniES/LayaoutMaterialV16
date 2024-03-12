import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { DialogDataUrgent } from '../../../interfaces/dialog-data-interfaces/dialog-data.interfaces';

@Component({
  selector: 'app-form-urgente',
  templateUrl: './form-urgente.component.html',
  styleUrls: ['./form-urgente.component.scss'],
})
export class FormUrgenteComponent {
  constructor(
    private dialogRef: MatDialogRef<FormUrgenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataUrgent
  ) {}

  saveUrgent() {
    this.data.document.urgent = true;
  }

  cancelSave() {
    this.data.document.urgent = true;
    this.dialogRef.close();
  }
}
