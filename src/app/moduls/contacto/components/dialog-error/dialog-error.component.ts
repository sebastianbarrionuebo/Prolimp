import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-error',
  templateUrl: './dialog-error.component.html',
  styleUrls: ['./dialog-error.component.css']
})
export class DialogErrorComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogErrorComponent>) {
  }

  salir() {
    this.dialogRef.close();
  }
}
