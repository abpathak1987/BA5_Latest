// src/app/app-routing.module.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './features/auth/registration/registration.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ReferrerDashboardComponent } from './features/referrer/referrer-dashboard/referrer-dashboard.component';
import { MakeReferralComponent } from './features/referrals/make-referral/make-referral.component';
import { EmployerSignupComponent } from './features/auth/employer-signup/employer-signup.component';
import { EmployerLoginComponent } from './features/auth/employer-login/employer-login.component';
import { EmployerDashboardComponent } from './features/employer/employer-dashboard/employer-dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },    
    { path: 'referrer-dashboard', component: ReferrerDashboardComponent },
    { path: 'make-referral', component: MakeReferralComponent },
    { path: 'employer-signup', component: EmployerSignupComponent },
    { path: 'employer-login', component: EmployerLoginComponent },
    { path: 'employer-dashboard', component: EmployerDashboardComponent },
    { path: '**', redirectTo: '' }
  ];


