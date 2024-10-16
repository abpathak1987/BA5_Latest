// src/app/features/auth/login/login.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <h2>Login</h2>
      <div>
        <label for="email">Email:</label>
        <input id="email" type="email" formControlName="email">
        <small *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
          Please enter a valid email address.
        </small>
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" formControlName="password">
        <small *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
          Password is required.
        </small>
      </div>
      <div>
        <label>
          <input type="checkbox" formControlName="rememberMe"> Remember Me
        </label>
      </div>
      <button type="submit" [disabled]="loginForm.invalid">Login</button>
      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div class="register-link">
        New user? <a routerLink="/register">Register here</a>
      </div>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
    div {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 5px;
    }
    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
    }
    .error-message {
      color: red;
      margin-top: 10px;
    }
    small {
      color: red;
    }
    .register-link {
      margin-top: 15px;
      text-align: center;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      this.authService.login(email, password, rememberMe).subscribe(
        user => {
          console.log('Login successful', user);
          if (user.role === 'referrer') {
            this.router.navigate(['/referrer-dashboard']);
          } else if (user.role === 'client') {
            this.router.navigate(['/client-dashboard']);
          } else {
            this.router.navigate(['/dashboard']);
          }
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      );
    }
  }
}