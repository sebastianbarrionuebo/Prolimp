import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filter } from 'rxjs';

@Component({
  selector: 'app-mantenimiento-edilicio-page',
  templateUrl: './mantenimiento-edilicio-page.component.html',
  styleUrls: ['./mantenimiento-edilicio-page.component.css']
})
export class MantenimientoEdilicioPageComponent implements OnInit {
  showScrollToTop: boolean = false; // Variable para controlar si mostrar el botón




  constructor(
    private router: Router,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    private viewportScroller: ViewportScroller,
  ) { }



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


  ngAfterViewInit() {
    // Forzamos la detección de cambios para asegurarnos de que los elementos estén disponibles
    this.cdr.detectChanges();


    // Esperar un frame antes de ejecutar las animaciones
    window.requestAnimationFrame(() => {

      gsap.from('#tituloAnimado', {
        rotation: 15,      // Gira 360 grados
        x: 0,            // Empieza fuera de la pantalla en el eje X
        opacity: 0,         // Comienza con opacidad 0
        duration: 1.5,      // Duración de la animación
        ease: 'elastic', // Efecto de suavizado
      });

      // Selecciona los elementos a animar
      const elementsIn = this.el.nativeElement.querySelectorAll('.fade-in');
      const elementsRight = this.el.nativeElement.querySelectorAll('.fade-right');
      const elementsLeft = this.el.nativeElement.querySelectorAll('.fade-left');

      // Aplica la animación a cada elemento in
      elementsIn.forEach((element: HTMLElement) => {
        gsap.from(element, {
          ease: 'elastic', // Efecto de suavizado
          scrollTrigger: {
            trigger: element, // Elemento que dispara la animación
            start: 'top 80%', // Inicia cuando el elemento está en el 80% de la ventana
            end: 'bottom 20%', // Termina cuando el elemento llega al 20% de la ventana
            toggleActions: 'play none none none', // Reproducir solo una vez
          },
          opacity: 0,
          y: 50, // Desplaza hacia abajo 50px
          duration: 1, // Duración de la animación
        });
      });

      // Aplica la animación a cada elemento right
      elementsRight.forEach((element: HTMLElement) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element, // Elemento que dispara la animación
            start: 'top 80%', // Inicia cuando el elemento está en el 80% de la ventana
            end: 'bottom 20%', // Termina cuando el elemento llega al 20% de la ventana
            toggleActions: 'play none none none', // Reproducir solo una vez
          },
          opacity: 0,
          x: 100, // Desplaza hacia la derecha
          duration: 1, // Duración de la animación
        });
      });

      // Aplica la animación a cada elemento left
      elementsLeft.forEach((element: HTMLElement) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element, // Elemento que dispara la animación
            start: 'top 80%', // Inicia cuando el elemento está en el 80% de la ventana
            end: 'bottom 20%', // Termina cuando el elemento llega al 20% de la ventana
            toggleActions: 'play none none none', // Reproducir solo una vez
          },
          opacity: 0,
          x: -100, // Desplaza hacia la izquierda
          duration: 1, // Duración de la animación
        });
      });
      // Actualizar ScrollTrigger después de configurar las animaciones
      ScrollTrigger.refresh();
    });
  }

  ngOnInit() {
    this.cdr.detectChanges();

    // Escuchar eventos de navegación para desplazarse al inicio
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]); // Usamos ViewportScroller
      ScrollTrigger.refresh(); // Refrescar las posiciones de los triggers
    });

    // Registramos el plugin ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
  }
}
