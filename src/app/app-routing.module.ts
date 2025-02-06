import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'Home',
    loadChildren: () => import("./moduls/home/home.module").then(m => m.HomeModule)
  },
  {
    path: 'Servicios',
    loadChildren: () => import("./moduls/servicios/servicios.module").then(m => m.ServiciosModule)
  },
  {
    path: 'Contactanos',
    loadChildren: () => import("./moduls/contacto/contacto.module").then(m => m.ContactoModule)
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
