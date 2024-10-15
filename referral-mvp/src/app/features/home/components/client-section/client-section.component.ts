// src/app/features/home/components/client-section/client-section.component.ts

import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-client-section',
  standalone: true,
  template: `
    <section class="client">
      <h2>For Clients</h2>
      <p>Find top talent through trusted referrals</p>
      <ul>
        <li>Access a curated pool of candidates</li>
        <li>Reduce hiring time and costs</li>
        <li>Improve quality of hires</li>
      </ul>
      <button>Start Hiring</button>
    </section>
  `,
  styles: [`
    .client {
      padding: 3rem 2rem;
      background-color: #f8f9fa;
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
      background-color: #17a2b8;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientSectionComponent {}