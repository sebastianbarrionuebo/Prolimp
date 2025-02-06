import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimpiezaIntegralPageComponent } from './components/limpieza-integral-page/limpieza-integral-page.component';
import { MantenimientoSanitarioPageComponent } from './components/mantenimiento-sanitario-page/mantenimiento-sanitario-page.component';
import { FilmacionCanieriasPageComponent } from './components/filmacion-canierias-page/filmacion-canierias-page.component';
import { MantenimientoEdilicioPageComponent } from './components/mantenimiento-edilicio-page/mantenimiento-edilicio-page.component';

const routes: Routes = [
  {
    path: 'Limpieza-Integral',
    component: LimpiezaIntegralPageComponent
  },
  {
    path: 'Mantenimiento-Sanitario',
    component: MantenimientoSanitarioPageComponent
  },
  {
    path: 'Mantenimiento-Sanitario/Filmacion-de-cañerias',
    component: FilmacionCanieriasPageComponent
  },
  {
    path: 'Mantenimiento-Edilicio',
    component: MantenimientoEdilicioPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
