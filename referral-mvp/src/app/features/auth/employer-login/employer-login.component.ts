// src/app/features/auth/employer-login/employer-login.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-employer-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="login-container">
      <h2>Employer Login</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" formControlName="email">
          <small *ngIf="loginForm.get('email')?.invalid && loginForm.get('email')?.touched">
            Please enter a valid email address
          </small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" formControlName="password">
          <small *ngIf="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
            Password is required
          </small>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" formControlName="rememberMe"> Remember Me
          </label>
        </div>
        <button type="submit" [disabled]="loginForm.invalid">Login</button>
      </form>
      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      <div class="signup-link">
        Don't have an account? <a routerLink="/employer-signup">Sign up here</a>
      </div>
    </div>
  `,
  styles: [`
    .login-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 20px;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
    }
    input[type="email"], input[type="password"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
    }
    small {
      color: red;
    }
    .error-message {
      color: red;
      margin-top: 10px;
    }
    .signup-link {
      margin-top: 15px;
      text-align: center;
    }
  `]
})
export class EmployerLoginComponent {
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
      this.authService.loginEmployer(email, password, rememberMe).subscribe(
        user => {
          console.log('Employer login successful', user);
          this.router.navigate(['/employer-dashboard']);
        },
        error => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      );
    }
  }
}