import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="home">
    <h1>Bienvenido a la aplicación Angular</h1>
    <nav>
      <a routerLink="/about">Acerca de</a> |
      <a routerLink="/data">Ver Data Table</a>
    </nav>
  </div>
  `,
  styles: [`
    .home {
      text-align: center;
      margin-top: 50px;
    }
    nav a {
      margin: 0 10px;
      text-decoration: none;
    }
  `]
})
export class HomeComponent { }
