// src/app/app-routing.module.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './features/auth/registration/registration.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ReferrerDashboardComponent } from './features/referrer/referrer-dashboard/referrer-dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },    
    { path: 'referrer-dashboard', component: ReferrerDashboardComponent },
    { path: '**', redirectTo: '' }
  ];


