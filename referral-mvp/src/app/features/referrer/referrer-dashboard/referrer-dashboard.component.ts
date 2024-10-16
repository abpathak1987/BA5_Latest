// src/app/features/referrer/referrer-dashboard/referrer-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../../../core/models/user.model';
import { Referral } from '../../../core/models/referral.model';
import { AuthService } from '../../../core/services/auth.service';
import { ReferralService } from '../../../core/services/referral.service';

@Component({
  selector: 'app-referrer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container" *ngIf="currentUser">
      <h1>Welcome, {{ currentUser.firstName }}!</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Profile</h5>
              <p><strong>Name:</strong> {{ currentUser.firstName }} {{ currentUser.lastName }}</p>
              <p><strong>Email:</strong> {{ currentUser.email }}</p>
              <!-- Add more user details as needed -->
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Referrals</h5>
              <p><strong>Total Referrals:</strong> {{ referrals.length }}</p>
              <p><strong>Pending Referrals:</strong> {{ getPendingReferrals() }}</p>
              <p><strong>Successful Referrals:</strong> {{ getSuccessfulReferrals() }}</p>
              <a routerLink="/make-referral" class="btn btn-primary">Make a Referral</a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Quick Actions</h5>
              <ul class="list-group">
                <li class="list-group-item"><a routerLink="/update-profile">Update Profile</a></li>
                <li class="list-group-item"><a routerLink="/referral-history">View Referral History</a></li>
                <li class="list-group-item"><a routerLink="/check-rewards">Check Rewards</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <h2>Your Recent Referrals</h2>
          <table class="table">
            <thead>
              <tr>
                <th>Candidate Name</th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let referral of referrals">
                <td>{{ referral.candidateName }}</td>
                <td>{{ referral.jobTitle }}</td>
                <td>{{ referral.company }}</td>
                <td>{{ referral.status }}</td>
                <td>{{ referral.createdAt | date }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container { margin-top: 2rem; }
    .card { margin-bottom: 1rem; }
    .btn-primary { margin-top: 1rem; }
    table { margin-top: 1rem; }
  `]
})
export class ReferrerDashboardComponent implements OnInit {
  currentUser: User | null = null;
  referrals: Referral[] = [];

  constructor(
    private authService: AuthService,
    private referralService: ReferralService
  ) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    if (this.currentUser) {
      this.loadReferrals();
    }
  }

  loadReferrals() {
    if (this.currentUser) {
      this.referralService.getReferrals(this.currentUser.id).subscribe(
        referrals => {
          this.referrals = referrals;
        },
        error => {
          console.error('Error loading referrals', error);
        }
      );
    }
  }

  getPendingReferrals(): number {
    return this.referrals.filter(r => r.status === 'pending').length;
  }

  getSuccessfulReferrals(): number {
    return this.referrals.filter(r => r.status === 'accepted').length;
  }
}