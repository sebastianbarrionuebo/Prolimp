import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faWhatsapp = faWhatsapp;


  onMenuOpened() {
    throw new Error('Method not implemented.');
  }
  isSticky = false;
  isMobileMenuOpen = false;
  isDropdownOpen = false;

  constructor(private router: Router, private renderer: Renderer2) { }


  irAContacto() {
    this.router.navigate(["/Contactanos"])
  }
  irALI() {
    this.router.navigate(["/Servicios/Limpieza-Integral"])
  }
  irAMS() {
    this.router.navigate(["/Servicios/Mantenimiento-Sanitario"])
  }
  irAFC() {
    this.router.navigate(["/Servicios/Filmacion-de-cañerias"])
  }
  irAME() {
    this.router.navigate(["/Servicios/Mantenimiento-Edilicio"])
  }
  irARedSocial(ruta: string) {
    window.open(ruta, '_blank');
  }


  irAHome() {
    this.router.navigate(["/home"])
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isDropdownOpen = false; // Cierra el dropdown si se cierra el menú móvil
    }
  }

  // Toggle para mostrar/ocultar el menú desplegable
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Cierra el menú si el usuario hace clic fuera de él
  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const menuButton = document.querySelector('.menu-button');

    if (dropdownMenu && !dropdownMenu.contains(event.target as Node) && menuButton !== event.target) {
      this.isDropdownOpen = false;
    }
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      if (!this.isSticky) {
        this.isSticky = true;
        this.renderer.addClass(document.querySelector('header'), 'sticky-header');
      }
    } else {
      if (this.isSticky) {
        this.isSticky = false;
        this.renderer.removeClass(document.querySelector('header'), 'sticky-header');
      }
    }
  }


  ngOnInit(): void {
    this.checkScroll();
  }
}
