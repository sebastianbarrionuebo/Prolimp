import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { LimpiezaIntegralPageComponent } from './components/limpieza-integral-page/limpieza-integral-page.component';
import { MantenimientoSanitarioPageComponent } from './components/mantenimiento-sanitario-page/mantenimiento-sanitario-page.component';
import { FilmacionCanieriasPageComponent } from './components/filmacion-canierias-page/filmacion-canierias-page.component';
import { MantenimientoEdilicioPageComponent } from './components/mantenimiento-edilicio-page/mantenimiento-edilicio-page.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LimpiezaIntegralPageComponent,
    MantenimientoSanitarioPageComponent,
    FilmacionCanieriasPageComponent,
    MantenimientoEdilicioPageComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MatIconModule,
    SharedModule
  ]
})
export class ServiciosModule { }
