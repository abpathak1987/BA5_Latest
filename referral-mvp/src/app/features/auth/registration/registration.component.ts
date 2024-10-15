// src/app/features/auth/registration/registration.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <input formControlName="firstName" placeholder="First Name">
      <input formControlName="lastName" placeholder="Last Name">
      <input formControlName="email" type="email" placeholder="Email">
      <input formControlName="password" type="password" placeholder="Password">
      <select formControlName="role">
        <option value="referrer">Referrer</option>
        <option value="client">Client</option>
      </select>
      <input *ngIf="isClient" formControlName="company" placeholder="Company">
      <button type="submit" [disabled]="registrationForm.invalid">Register</button>
    </form>
  `,
  styles: [/* Add your styles here */]
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['referrer', Validators.required],
      company: ['']
    });
  }

  get isClient() {
    return this.registrationForm.get('role')?.value === 'client';
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.authService.register(this.registrationForm.value).subscribe(
        user => {
          console.log('Registration successful', user);
          // Always redirect to dashboard for now
          this.router.navigate(['/referrer-dashboard']);
        },
        error => {
          console.error('Registration failed', error);
        }
      );
    }
  }
}