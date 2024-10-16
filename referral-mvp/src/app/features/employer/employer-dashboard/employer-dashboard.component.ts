// src/app/features/employer/employer-dashboard/employer-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="dashboard-container" *ngIf="currentUser">
      <h1>Welcome to the National Referral Database, {{ currentUser.firstName }}!</h1>
      <div class="dashboard-summary">
        <div class="summary-card">
          <h3>Referral Pool Overview</h3>
          <p><strong>Total Available Referrals:</strong> {{ totalReferrals }}</p>
          <p><strong>New Referrals Today:</strong> {{ newReferralsToday }}</p>
          <p><strong>Referrals Matching Your Criteria:</strong> {{ matchingReferrals }}</p>
        </div>
        <div class="summary-card">
          <h3>Your Hiring Activity</h3>
          <p><strong>Candidates Under Review:</strong> {{ candidatesUnderReview }}</p>
          <p><strong>Interviews Scheduled:</strong> {{ interviewsScheduled }}</p>
          <p><strong>Offers Extended:</strong> {{ offersExtended }}</p>
        </div>
      </div>
      <div class="quick-actions">
        <h2>Quick Actions</h2>
        <div class="action-buttons">
          <a routerLink="/browse-referrals" class="btn btn-primary">Browse Referrals</a>
          <a routerLink="/search-candidates" class="btn btn-primary">Search Candidates</a>
          <a routerLink="/manage-pipeline" class="btn btn-secondary">Manage Hiring Pipeline</a>
          <a routerLink="/update-preferences" class="btn btn-secondary">Update Hiring Preferences</a>
        </div>
      </div>
      <div class="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          <li *ngFor="let activity of recentActivities">{{ activity }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    .dashboard-summary {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
    }
    .summary-card {
      background-color: #f8f9fa;
      border-radius: 8px;
      padding: 20px;
      width: 48%;
    }
    .quick-actions {
      margin-bottom: 30px;
    }
    .action-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .btn {
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
    .btn-primary {
      background-color: #007bff;
    }
    .btn-secondary {
      background-color: #6c757d;
    }
    .recent-activity ul {
      list-style-type: none;
      padding: 0;
    }
    .recent-activity li {
      margin-bottom: 10px;
      padding: 10px;
      background-color: #f8f9fa;
      border-radius: 5px;
    }
  `]
})
export class EmployerDashboardComponent implements OnInit {
  currentUser: User | null = null;
  totalReferrals: number = 0;
  newReferralsToday: number = 0;
  matchingReferrals: number = 0;
  candidatesUnderReview: number = 0;
  interviewsScheduled: number = 0;
  offersExtended: number = 0;
  recentActivities: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
    this.loadDashboardData();
  }

  loadDashboardData() {
    // In a real application, you would fetch this data from a service
    this.totalReferrals = 5000;
    this.newReferralsToday = 75;
    this.matchingReferrals = 120;
    this.candidatesUnderReview = 15;
    this.interviewsScheduled = 5;
    this.offersExtended = 2;
    this.recentActivities = [
      'New referral matching your criteria: Senior Software Engineer',
      'Candidate Jane Doe accepted for interview',
      'Updated hiring preferences for Marketing roles',
      'Viewed profile: John Smith, referred by Alice Johnson'
    ];
  }
}