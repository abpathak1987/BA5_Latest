// src/app/core/models/user.model.ts

export interface User {
    id: string;
    email: string;
    password: string; // Note: This should never be sent to the client
    firstName: string;
    lastName: string;
    role: 'referrer' | 'client' | 'admin';
    company?: string; // Optional: for clients
    companySize?: string; // Optional: for clients
    jobTitle?: string;
    industry?: string;
    createdAt: Date;
    updatedAt: Date;
  }