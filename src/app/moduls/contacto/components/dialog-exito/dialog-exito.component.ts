import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-exito',
  templateUrl: './dialog-exito.component.html',
  styleUrls: ['./dialog-exito.component.css']
})
export class DialogExitoComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogExitoComponent>) {
  }

  salir() {
    this.dialogRef.close();
  }
}
