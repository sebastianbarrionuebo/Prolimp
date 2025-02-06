import { Component } from '@angular/core';
// Importar los íconos específicos
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})
export class SocialButtonsComponent {
  // Definir los íconos que se usarán en el componente
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  constructor(private router: Router) { }

  irAContacto() {
    this.router.navigate(['/Contactanos']);
  }

  irASeccion(ruta: string) {
    this.router.navigate([ruta]);
  }

  irARedSocial(ruta: string) {
    window.open(ruta, '_blank');
  }

}
