// src/app/core/services/referral.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Referral } from '../models/referral.model';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {
  private referrals: Referral[] = [];

  constructor() {}

  createReferral(referral: Omit<Referral, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Observable<Referral> {
    const newReferral: Referral = {
      ...referral,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.referrals.push(newReferral);
    return of(newReferral);
  }

  getReferrals(referrerId: string): Observable<Referral[]> {
    return of(this.referrals.filter(referral => referral.referrerId === referrerId));
  }
}