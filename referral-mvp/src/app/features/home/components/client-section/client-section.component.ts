// src/app/features/home/components/client-section/client-section.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-section',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="client-section">
      <h2>For Employers</h2>
      <p>Find top talent through trusted referrals</p>
      <div class="benefits">
        <ul>
          <li>Access a curated pool of pre-vetted candidates</li>
          <li>Reduce hiring time and costs</li>
          <li>Improve quality of hires through personal recommendations</li>
          <li>Streamlined hiring process with our intuitive platform</li>
        </ul>
      </div>
      <div class="features">
        <h3>Key Features</h3>
        <ul>
          <li>Easy job posting and management</li>
          <li>Advanced candidate search and filtering</li>
          <li>Direct communication with referrers</li>
          <li>Interview scheduling and hiring pipeline tracking</li>
        </ul>
      </div>
      <div class="cta">
        <a routerLink="/employer-signup" class="btn btn-primary">Sign Up as Employer</a>
        <a routerLink="/employer-login" class="btn btn-secondary">Employer Login</a>
      </div>
    </section>
  `,
  styles: [`
    .client-section {
      padding: 3rem 2rem;
      background-color: #f8f9fa;
      text-align: center;
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    .benefits, .features {
      max-width: 600px;
      margin: 0 auto 2rem;
      text-align: left;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 0.5rem;
      padding-left: 1.5rem;
      position: relative;
    }
    li::before {
      content: "✓";
      color: #28a745;
      position: absolute;
      left: 0;
    }
    .cta {
      margin-top: 2rem;
    }
    .btn {
      display: inline-block;
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      text-decoration: none;
      border-radius: 5px;
      margin: 0 10px;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }
  `]
})
export class ClientSectionComponent {}