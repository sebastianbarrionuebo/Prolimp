import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-limpieza-integral-page',
  templateUrl: './limpieza-integral-page.component.html',
  styleUrls: ['./limpieza-integral-page.component.css']
})
export class LimpiezaIntegralPageComponent implements OnInit, OnDestroy {
  showScrollToTop: boolean = false; // Variable para controlar si mostrar el botón
  currentIndex = 0;
  images = [
    'assets/Limpieza hogares.jpg',
    'assets/Limpieza edificios.jpg',
    'assets/Limpieza oficinas.jpg'
  ];
  intervalId: any;


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

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
    this.updateCarousel();
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const offset = -this.currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  startAutoChange() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // Cambiar cada 3000 milisegundos (3 segundos)
  }



  ngAfterViewInit() {
    // Forzamos la detección de cambios para asegurarnos de que los elementos estén disponibles
    this.cdr.detectChanges();

    // Esperar un frame antes de ejecutar las animaciones
    window.requestAnimationFrame(() => {
      gsap.from('#tituloAnimado', {
        rotation: 15,      // Gira 360 grados
        y: 0,            // Empieza fuera de la pantalla en el eje X
        opacity: 0,         // Comienza con opacidad 0
        duration: 1.5,      // Duración de la animación
        ease: 'elastic', // Efecto de suavizado
      });

      // Selecciona los elementos a animar
      const elementsIn = this.el.nativeElement.querySelectorAll('.fade-in');
      const elementsRight = this.el.nativeElement.querySelectorAll('.fade-right');
      const elementsLeft = this.el.nativeElement.querySelectorAll('.fade-left');

      // Configurar animaciones con ScrollTrigger
      elementsIn.forEach((element: HTMLElement) => {
        gsap.from(element, {
          ease: 'elastic', // Efecto de suavizado
          scrollTrigger: {
            trigger: element, // Elemento que dispara la animación
            start: 'top 130%', // Inicia cuando el elemento está en el 80% de la ventana
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
            start: 'top 130%', // Inicia cuando el elemento está en el 80% de la ventana
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
            start: 'top 130%', // Inicia cuando el elemento está en el 80% de la ventana
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

  ngOnDestroy() {
    // Detener el intervalo cuando el componente se destruya
    clearInterval(this.intervalId);
    gsap.killTweensOf('.fade-in');
    gsap.killTweensOf('.fade-right');
    gsap.killTweensOf('.fade-left');
    gsap.killTweensOf('#tituloAnimado');
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

    // Cambia la imagen cada 3 segundos
    this.startAutoChange();

    // Registramos ScrollTrigger para que esté disponible
    gsap.registerPlugin(ScrollTrigger);
  }
}
