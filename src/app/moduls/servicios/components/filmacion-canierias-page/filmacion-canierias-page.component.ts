import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-filmacion-canierias-page',
  templateUrl: './filmacion-canierias-page.component.html',
  styleUrls: ['./filmacion-canierias-page.component.css']
})
export class FilmacionCanieriasPageComponent {
  showScrollToTop: boolean = false; // Variable para controlar si mostrar el botón



    // Detectar el evento de scroll
    @HostListener('window:scroll', [])
    onWindowScroll() {
      // Si el scroll es mayor a 200px, mostramos el botón
      if (window.pageYOffset > 200) {
        this.showScrollToTop = true;
      } else {
        this.showScrollToTop = false;
      }
    }
}
