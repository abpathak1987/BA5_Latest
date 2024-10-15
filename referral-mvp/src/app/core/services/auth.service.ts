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

  login(email: string, password: string): Observable<User> {
    // Simulate API response
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      firstName: 'Mock',
      lastName: 'User',
      email: email,
      password: password, // Note: In a real app, never store or return plain text passwords
      role: 'referrer',
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

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}