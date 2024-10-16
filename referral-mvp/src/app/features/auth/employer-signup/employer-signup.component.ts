// src/app/features/auth/employer-signup/employer-signup.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-employer-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="signup-container">
      <h2>Sign Up as an Employer</h2>
      <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="companyName">Company Name</label>
          <input type="text" id="companyName" formControlName="companyName">
          <small *ngIf="signupForm.get('companyName')?.invalid && signupForm.get('companyName')?.touched">
            Company name is required
          </small>
        </div>
        <div class="form-group">
          <label for="industry">Industry</label>
          <input type="text" id="industry" formControlName="industry">
        </div>
        <div class="form-group">
          <label for="companySize">Company Size</label>
          <select id="companySize" formControlName="companySize">
            <option value="">Select company size</option>
            <option value="1-10">1-10 employees</option>
            <option value="11-50">11-50 employees</option>
            <option value="51-200">51-200 employees</option>
            <option value="201-500">201-500 employees</option>
            <option value="501+">501+ employees</option>
          </select>
        </div>
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" formControlName="firstName">
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" formControlName="lastName">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" formControlName="email">
          <small *ngIf="signupForm.get('email')?.invalid && signupForm.get('email')?.touched">
            Please enter a valid email address
          </small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" formControlName="password">
          <small *ngIf="signupForm.get('password')?.invalid && signupForm.get('password')?.touched">
            Password must be at least 8 characters long
          </small>
        </div>
        <button type="submit" [disabled]="signupForm.invalid">Sign Up</button>
      </form>
      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  `,
  styles: [`
    .signup-container {
      max-width: 400px;
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
    input, select {
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
  `]
})
export class EmployerSignupComponent {
  signupForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      companyName: ['', Validators.required],
      industry: [''],
      companySize: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.registerEmployer(this.signupForm.value).subscribe(
        response => {
          console.log('Employer registered successfully', response);
          this.router.navigate(['/employer-dashboard']);
        },
        error => {
          console.error('Registration failed', error);
          this.errorMessage = 'Registration failed. Please try again.';
        }
      );
    }
  }
}