import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Prolimp - Servicios Profesionales');
    this.meta.addTags([
      { name: 'description', content: 'Ofrecemos los mejores servicios de limpieza industrial en Montevideo, Uruguay.' },
      { name: 'keywords', content: 'servicios de higiene y mantenimiento para negocios, empresa de limpieza con garantía de calidad, limpieza profunda de oficinas en Uruguay, desinfección y sanitización para empresas, servicio de limpieza industrial en Montevideo, servicios de limpieza para hospitales, limpieza profesional para empresas, mejores empresas de limpieza en Uruguay, empresa de limpieza confiable, cuánto cuesta la limpieza industrial, contratar empresa de limpieza, mantenimiento de oficinas en Uruguay, limpieza de empresas en Montevideo, empresa de limpieza en Uruguay, desinfección de oficinas en Montevideo, sanitización en Uruguay, limpieza industrial en Montevideo, control de plagas, higiene industrial, mantenimiento de limpieza, limpieza de empresas, limpieza de oficinas, desinfección profunda, sanitización de espacios, limpieza profesional, servicios de limpieza, limpieza industrial, limpieza, industrial, Montevideo, servicios, sanitización' },
      { name: 'author', content: 'Traheart' },
      { property: 'og:title', content: 'Prolimp - Servicios Profesionales' },
      { property: 'og:description', content: 'Ofrecemos los mejores servicios de limpieza industrial en Montevideo, Uruguay.' },
      { property: 'og:image', content: 'URL_DE_TU_IMAGEN' },
      { property: 'og:url', content: 'https://Prolimp.com' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }

  ngOnInit() {
    this.title.setTitle('Prolimp - Servicios Profesionales');
    this.meta.updateTag({ name: 'description', content: 'Ofrecemos los mejores servicios de limpieza industrial en Montevideo, Uruguay.' });
  }
}
