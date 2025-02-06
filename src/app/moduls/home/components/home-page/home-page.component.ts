import { isPlatformBrowser, ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit, OnInit {
  showScrollToTop: boolean = false; // Variable para controlar si mostrar el botón
  missionVisionVisible: boolean = false; // Variable para controlar la visibilidad de la sección Misión, Visión y Valores


  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: object
  ) { }

  // Detectar el evento de scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {

      // Si el scroll es mayor a 200px, mostramos el botón
      if (window.pageYOffset > 200) {
        this.showScrollToTop = true;
      } else {
        this.showScrollToTop = false;
      }

      // Detectar la posición de la sección Misión, Visión y Valores
      const element = document.querySelector('.mission-vision-valores_titleBg');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          this.missionVisionVisible = true;
        } else {
          this.missionVisionVisible = false;
        }
      }
    }
  }

  // Función para hacer scroll hacia arriba
  scrollToTop() {

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Esto hace el scroll suave
      });
    }
  }


  irALI() {
    this.router.navigate(["/Servicios/Limpieza-Integral"])
  }
  irAMS() {
    this.router.navigate(["/Servicios/Mantenimiento-Sanitario"])
  }
  irAME() {
    this.router.navigate(["/Servicios/Mantenimiento-Edilicio"])
  }


  // Función para hacer ir a Whatsapp
  redirectToWhatsApp() {

    if (isPlatformBrowser(this.platformId)) {
      window.open('https://web.whatsapp.com/', '_blank'); // Abre WhatsApp Web en una nueva pestaña
    }
  }


  ngAfterViewInit() {
    // Para la sección Servicios
    /*
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
          }
        });
      },
      { threshold: 0.2 } // Visible cuando el 20% del elemento aparece en pantalla
    );

    const serviciosSection = document.querySelector('.servicios-container');
    if (serviciosSection) {
      observer.observe(serviciosSection);
    }

    const metodoSection = document.querySelector('.metodo-trabajo');
    if (metodoSection) {
      observer.observe(metodoSection);
    }

    // Para la sección Misión, Visión y Valores
    const missionVisionSection = document.querySelector('.mission-vision-valores_titleBg');
    if (missionVisionSection) {
      observer.observe(missionVisionSection);
    }
    */





    if (isPlatformBrowser(this.platformId)) {
      // Necesitamos asegurarnos de que los elementos estén completamente renderizados
      this.cdr.detectChanges();

      // Esperar un frame antes de ejecutar las animaciones
      window.requestAnimationFrame(() => {

        gsap.from('#animado', {
          x: 100, // Desplaza hacia la derecha
          duration: 0.6, // Duración de la animación
          scale: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '#animado',  // El elemento que dispara la animación
            start: 'top 80%',     // Cuando el 80% del elemento está visible en la ventana
            end: 'bottom 20%',    // Cuando el 20% del elemento ya ha salido de la ventana
          }
        })

        gsap.from('.buttonIndex', {
          x: 0,
          duration: 0.5,
          scale: 0,
          stagger: 0.3, // Retrasa la animación de cada botón
        });


        // Selecciona los elementos a animar
        const elementsIn = this.el.nativeElement.querySelectorAll('.fade-in');
        const elementsRight = this.el.nativeElement.querySelectorAll('.fade-right');
        const elementsLeft = this.el.nativeElement.querySelectorAll('.fade-left');

        // Aplica la animación a cada elemento in
        elementsIn.forEach((element: HTMLElement) => {
          gsap.from(element, {
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
      })
    }
  }
  ngOnDestroy() {

    if (isPlatformBrowser(this.platformId)) {
      gsap.killTweensOf('.fade-in');
      gsap.killTweensOf('.fade-right');
      gsap.killTweensOf('.fade-left');
      gsap.killTweensOf('#animado');
      gsap.killTweensOf('.buttonIndex');
    }
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
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
}
