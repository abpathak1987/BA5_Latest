// src/app/navigation/navigation.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" routerLink="/">Referral MVP</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/register" routerLinkActive="active">Register</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/login" routerLinkActive="active">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      padding: 10px 20px;
    }
    .navbar-nav .nav-link {
      padding: 0 15px;
    }
  `]
})
export class NavigationComponent {}