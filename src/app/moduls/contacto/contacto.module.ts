import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoPageComponent } from './components/contacto-page/contacto-page.component';
import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogExitoComponent } from './components/dialog-exito/dialog-exito.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContactoPageComponent,
    DialogExitoComponent,
    DialogErrorComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class ContactoModule { }
