import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/register">Register</a></li>
        <li><a routerLink="/login">Login</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    nav { background-color: #f0f0f0; padding: 10px; }
    ul { list-style-type: none; padding: 0; }
    li { display: inline; margin-right: 10px; }
    a { text-decoration: none; color: black; }
  `]
})
export class NavigationComponent {}
