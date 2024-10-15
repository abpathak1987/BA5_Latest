// src/app/features/referrer/referrer-dashboard/referrer-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Referrer } from '../../../core/models/referrer.model';

@Component({
  selector: 'app-referrer-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Welcome, {{ referrer.firstName }}!</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Profile</h5>
              <p><strong>Name:</strong> {{ referrer.firstName }} {{ referrer.lastName }}</p>
              <p><strong>Company:</strong> {{ referrer.company }}</p>
              <p><strong>Job Title:</strong> {{ referrer.jobTitle }}</p>
              <p><strong>Industry:</strong> {{ referrer.industry }}</p>
              <p><strong>Experience:</strong> {{ referrer.yearsOfExperience }} years</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Your Referrals</h5>
              <p><strong>Total Referrals:</strong> {{ referrer.referralsCount }}</p>
              <p><strong>Successful Referrals:</strong> {{ referrer.successfulReferrals }}</p>
              <button class="btn btn-primary">Make a Referral</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Quick Actions</h5>
              <ul class="list-group">
                <li class="list-group-item"><a href="#">Update Profile</a></li>
                <li class="list-group-item"><a href="#">View Referral History</a></li>
                <li class="list-group-item"><a href="#">Check Rewards</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container { margin-top: 2rem; }
    .card { margin-bottom: 1rem; }
    .btn-primary { margin-top: 1rem; }
  `]
})
export class ReferrerDashboardComponent implements OnInit {
  referrer: Referrer = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    company: 'Tech Corp',
    jobTitle: 'Senior Developer',
    industry: 'Software',
    yearsOfExperience: 8,
    skills: ['JavaScript', 'Angular', 'Node.js'],
    bio: 'Experienced developer passionate about connecting great talent.',
    referralsCount: 5,
    successfulReferrals: 2,
    joinedDate: new Date()
  };

  ngOnInit() {
    // In a real application, you would fetch the referrer data from a service
    // this.referrerService.getCurrentReferrer().subscribe(data => this.referrer = data);
  }
}