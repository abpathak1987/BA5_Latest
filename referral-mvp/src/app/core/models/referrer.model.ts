// src/app/core/models/referrer.model.ts

export interface Referrer {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
    industry: string;
    yearsOfExperience: number;
    skills: string[];
    bio: string;
    referralsCount: number;
    successfulReferrals: number;
    joinedDate: Date;
  }