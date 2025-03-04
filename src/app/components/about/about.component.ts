import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div class="about">
    <h1>Acerca de esta aplicación</h1>
    <p>Esta aplicación fue diseñada usando Angular 19 con navegación entre componentes y consumo de API.</p>
    <nav>
      <a routerLink="/">Inicio</a> |
      <a routerLink="/data">Ver Data Table</a>
    </nav>
  </div>
  `,
  styles: [`
    .about {
      text-align: center;
      margin-top: 50px;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
    }
  `]
})
export class AboutComponent { }
