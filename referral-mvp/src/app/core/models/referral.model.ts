// src/app/core/models/referral.model.ts

export interface Referral {
    id?: string;
    referrerId: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone?: string;
    jobTitle: string;
    company: string;
    notes: string;
    status: 'pending' | 'accepted' | 'rejected';
    createdAt: Date;
    updatedAt: Date;
  }