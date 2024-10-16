// src/app/features/referrals/make-referral/make-referral.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReferralService } from '../../../core/services/referral.service';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-referral',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Make a Referral</h2>
    <form [formGroup]="referralForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="candidateName">Candidate Name:</label>
        <input id="candidateName" formControlName="candidateName" type="text">
      </div>
      <div>
        <label for="candidateEmail">Candidate Email:</label>
        <input id="candidateEmail" formControlName="candidateEmail" type="email">
      </div>
      <div>
        <label for="candidatePhone">Candidate Phone:</label>
        <input id="candidatePhone" formControlName="candidatePhone" type="tel">
      </div>
      <div>
        <label for="jobTitle">Job Title:</label>
        <input id="jobTitle" formControlName="jobTitle" type="text">
      </div>
      <div>
        <label for="company">Company:</label>
        <input id="company" formControlName="company" type="text">
      </div>
      <div>
        <label for="notes">Notes:</label>
        <textarea id="notes" formControlName="notes"></textarea>
      </div>
      <div>
        <label for="resumeFile">Upload Resume:</label>
        <input id="resumeFile" type="file" (change)="onFileSelected($event)" accept=".pdf,.doc,.docx">
        <span *ngIf="selectedFile">Selected file: {{ selectedFile.name }}</span>
      </div>
      <button type="submit" [disabled]="referralForm.invalid">Submit Referral</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
      margin: 0 auto;
    }
    label {
      font-weight: bold;
    }
    input, textarea {
      width: 100%;
      padding: 5px;
    }
    button {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:disabled {
      background-color: #cccccc;
    }
  `]
})
export class MakeReferralComponent {
  referralForm: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private referralService: ReferralService,
    private authService: AuthService,
    private router: Router
  ) {
    this.referralForm = this.fb.group({
      candidateName: ['', Validators.required],
      candidateEmail: ['', [Validators.required, Validators.email]],
      candidatePhone: [''],
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      notes: ['']
    });
  }

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.selectedFile = fileList[0];
    }
  }

  onSubmit() {
    if (this.referralForm.valid) {
      const currentUser = this.authService.currentUserValue;
      if (currentUser) {
        const referralData = {
          ...this.referralForm.value,
          referrerId: currentUser.id,
        };

        if (this.selectedFile) {
          referralData.resumeFile = this.selectedFile;
          referralData.resumeFileName = this.selectedFile.name;
        }

        this.referralService.createReferral(referralData).subscribe(
          result => {
            console.log('Referral submitted successfully', result);
            this.router.navigate(['/referrer-dashboard']);
          },
          error => {
            console.error('Error submitting referral', error);
          }
        );
      } else {
        console.error('No current user found');
        // Handle the case where there's no logged-in user
      }
    }
  }
}