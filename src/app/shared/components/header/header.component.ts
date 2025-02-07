import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; // Importa NavigationEnd
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs'; // Importa Subscription para manejar la suscripción

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  faWhatsapp = faWhatsapp;

  isSticky = false;
  isMobileMenuOpen = false;
  isDropdownOpen = false;

  @ViewChild('headerElement') headerElement!: ElementRef;
  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;

  private routerSubscription!: Subscription; // Para manejar la suscripción al Router

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.checkScroll();

    // Suscribirse a los eventos de navegación
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Restablecer el estado del dropdown al cambiar de ruta
        this.isDropdownOpen = false;
        this.isMobileMenuOpen = false; // También puedes cerrar el menú móvil si lo deseas
      }
    });
  }

  ngOnDestroy(): void {
    // Limpiar la suscripción al destruir el componente
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Métodos de navegación
  irAContacto() {
    this.router.navigate(["/Contactanos"]);
  }
  irALI() {
    this.router.navigate(["/Servicios/Limpieza-Integral"]);
  }
  irAMS() {
    this.router.navigate(["/Servicios/Mantenimiento-Sanitario"]);
  }
  irAFC() {
    this.router.navigate(["/Servicios/Filmacion-de-cañerias"]);
  }
  irAME() {
    this.router.navigate(["/Servicios/Mantenimiento-Edilicio"]);
  }
  irARedSocial(ruta: string) {
    window.open(ruta, '_blank');
  }
  irAHome() {
    this.router.navigate(["/home"]);
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  toggleMobileMenu() {
    this.cdRef.detectChanges();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.isDropdownOpen = false; // Cierra el dropdown si se cierra el menú móvil
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent) {
    if (!this.dropdownMenu?.nativeElement || !this.menuButton?.nativeElement) return;

    const clickedInsideDropdown = this.dropdownMenu.nativeElement.contains(event.target);
    const clickedInsideButton = (event.target as HTMLElement).closest('.menu-button');
    if (!clickedInsideDropdown && !clickedInsideButton) {
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
}
