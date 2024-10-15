// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      padding-top: 20px;
    }
  `]
})
export class AppComponent {
  title = 'referral-mvp';
}