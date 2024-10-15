// src/app/features/home/home.component.ts

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../features/home/components/hero-section/hero-section.component';
import { ReferrerSectionComponent } from '../features/home/components/referrer-section/referrer-section.component';
import { ClientSectionComponent } from '../features/home/components/client-section/client-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, ReferrerSectionComponent, ClientSectionComponent],
  template: `
    <app-hero-section></app-hero-section>
    <app-referrer-section></app-referrer-section>
    <app-client-section></app-client-section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}