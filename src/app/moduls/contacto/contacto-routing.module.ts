import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoPageComponent } from './components/contacto-page/contacto-page.component';

const routes: Routes = [
    {
      path: '',
      component: ContactoPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
