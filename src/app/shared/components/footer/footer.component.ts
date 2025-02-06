import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Importar los íconos específicos
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Definir los íconos que se usarán en el componente
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  constructor(private router: Router) {}

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
