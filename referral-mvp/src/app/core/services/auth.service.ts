// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  register(user: Partial<User>): Observable<User> {
    // Simulate API response
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      password: user.password || '', // Note: In a real app, never store plain text passwords
      role: user.role || 'referrer',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return of(mockUser).pipe(
      map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  login(email: string, password: string, rememberMe: any): Observable<User> {
    // Simulate API response
    const mockUser: User = {
      id: '1',
      email: email,
      password: password, // In a real app, this should be hashed and not returned
      firstName: 'John',
      lastName: 'Doe',
      role: 'client',
      company: 'Tech Corp',
      industry: 'Technology',
      companySize: '51-200',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    return of(mockUser).pipe(
      map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  registerEmployer(employerData: any): Observable<User> {
    // In a real application, you would send a request to your backend here
    // For now, we'll just simulate a successful registration
    const user: User = {
      id: '1',
      email: "a@a.com",
      password: "testetst", // In a real app, this should be hashed and not returned
      firstName: 'John',
      lastName: 'Doe',
      role: 'client',
      company: 'Tech Corp',
      industry: 'Technology',
      companySize: '51-200',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Store user details in local storage
    this.storeUserData(user, false);
    this.currentUserSubject.next(user);
    return of(user);
  }


  loginEmployer(email: string, password: string, rememberMe: boolean): Observable<User> {
    // In a real application, you would send a request to your backend here
    // For now, we'll just simulate a successful login
    const user: User = {
      id: '1',
      email: email,
      firstName: 'John',
      lastName: 'Doe',
      role: 'client',
      company: 'Tech Corp',
      industry: 'Technology',
      companySize: '51-200',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Store user details in local storage
    this.storeUserData(user, rememberMe);
    this.currentUserSubject.next(user);
    return of(user);
  }

  private storeUserData(user: User, rememberMe: boolean) {
    if (rememberMe) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}