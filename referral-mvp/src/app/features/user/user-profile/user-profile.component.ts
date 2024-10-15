// src/app/features/user/user-profile/user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-profile',
  template: `
    <div *ngIf="user">
      <h2>User Profile</h2>
      <p>Name: {{user.firstName}} {{user.lastName}}</p>
      <p>Email: {{user.email}}</p>
      <p>Role: {{user.role}}</p>
      <p *ngIf="user.company">Company: {{user.company}}</p>
      <!-- Add edit functionality here -->
    </div>
  `,
  styles: [/* Add your styles here */]
})
export class UserProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }
}