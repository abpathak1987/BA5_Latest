import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  template: `
    <section class="hero">
      <h1>Welcome! We built this for you.</h1>
      <div class="hero-content">
        <p>We know this: people are frustrated in looking for work. There are too many bots, fraudulent platforms, and expensive options that don't help.</p>
        <p><strong>This is a solution that relies on you and your network of real people.</strong></p>
        <h2>How it works:</h2>
        <ul>
          <li>Refer up to five colleagues using our platform</li>
          <li>Add your notes, resumes, and comments</li>
          <li>We'll sort the correct industry and function for companies to review</li>
          <li>If your referral is hired and stays for 90 days, you get paid</li>
        </ul>
        <p class="highlight">It works just like corporate employee referral programs, except this is on a national basis. For all of us.</p>
      </div>
      <button class="cta-button">Get Started</button>
    </section>
  `,
  styles: [`
    .hero {
      text-align: center;
      padding: 4rem 2rem;
      background-color: #f0f0f0;
      max-width: 800px;
      margin: 0 auto;
    }
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: #333;
    }
    h2 {
      font-size: 1.8rem;
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      color: #444;
    }
    .hero-content {
      text-align: left;
    }
    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
      color: #555;
    }
    ul {
      list-style-type: none;
      padding-left: 1rem;
      margin-bottom: 1.5rem;
    }
    li {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;
    }
    li::before {
      content: "•";
      color: #007bff;
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }
    .highlight {
      font-style: italic;
      color: #007bff;
      margin-top: 1.5rem;
    }
    .cta-button {
      padding: 0.8rem 1.5rem;
      font-size: 1.2rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .cta-button:hover {
      background-color: #0056b3;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {}