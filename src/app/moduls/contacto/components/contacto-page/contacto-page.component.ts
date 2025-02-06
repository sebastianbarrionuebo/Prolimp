import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormService } from 'src/app/core/form.service';
import { DialogExitoComponent } from '../dialog-exito/dialog-exito.component';
import { DialogErrorComponent } from '../dialog-error/dialog-error.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-contacto-page',
  templateUrl: './contacto-page.component.html',
  styleUrls: ['./contacto-page.component.css']
})
export class ContactoPageComponent {
  showScrollToTop: boolean = false; // Variable para controlar si mostrar el botón
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private form: FormService,
    private matDialog: MatDialog,
    private overlay: Overlay
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      subject: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /*
  dialogButton() {
    // Desactiva el scroll del body
    document.body.style.overflow = 'hidden';

    const dialogRef = this.matDialog.open(DialogErrorComponent, {
      scrollStrategy: this.overlay.scrollStrategies.noop(), // Evita el scroll del fondo
    });

    dialogRef.afterClosed().subscribe({
      next: (result: any) => {
        // Reactiva el scroll del body
        document.body.style.overflow = 'auto';
        this.contactForm.reset();
        console.log('El cuadro de diálogo se cerró:', result);
      }
    });
  }*/

  onSubmit() {
    if (this.contactForm.valid) {
      // Desactiva el scroll del body
      document.body.style.overflow = 'hidden';

      this.form.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Correo enviado:', response);
          //alert('¡Formulario enviado con éxito!');
          const dialogRef = this.matDialog.open(DialogExitoComponent, {
            scrollStrategy: this.overlay.scrollStrategies.noop(), // Evita el scroll del fondo
          });
          dialogRef.afterClosed().subscribe({
            next: (result: any) => {
              document.body.style.overflow = 'auto';
              this.contactForm.reset();
              console.log('El cuadro de diálogo se cerró:', result);
            }
          });
        },
        error: (error) => {
          console.error('Error al enviar correo:', error);
          //alert('Hubo un problema al enviar el formulario.');
          const dialogRef = this.matDialog.open(DialogErrorComponent, {
            scrollStrategy: this.overlay.scrollStrategies.noop(), // Evita el scroll del fondo
          });
          dialogRef.afterClosed().subscribe({
            next: (result: any) => {
              document.body.style.overflow = 'auto';
              console.log('El cuadro de diálogo se cerró:', result);
            }
          });
        },
      });
    }
  }
}
