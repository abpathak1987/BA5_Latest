// src/app/features/home/components/referrer-section/referrer-section.component.ts

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-referrer-section',
  standalone: true,
  template: `
    <section class="referrer">
      <h2>For Referrers</h2>
      <p>Help your network find great opportunities</p>
      <ul>
        <li>Easy referral process</li>
        <li>Track your referrals</li>
        <li>Earn rewards</li>
      </ul>
      <button>Refer Now</button>
    </section>
  `,
  styles: [`
    .referrer {
      padding: 3rem 2rem;
      background-color: #e9ecef;
    }
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin-bottom: 2rem;
    }
    li {
      margin-bottom: 0.5rem;
    }
    button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReferrerSectionComponent {}