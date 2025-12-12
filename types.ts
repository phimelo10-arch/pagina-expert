export interface Testimonial {
  id: number;
  name: string;
  text: string;
  type: 'short' | 'medium' | 'long';
}

export interface TransformationCase {
  id: number;
  title: string;
  before: string;
  after: string;
}

export interface GoogleReview {
  id: number;
  name: string;
  rating: number; // Always 5 based on prompt
  comment: string;
  date: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  benefit: string;
  iconName: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface DoctorProfile {
  name: string;
  cro: string;
  location: string;
  specialties: string[];
  whatsapp: string;
  experienceYears: number;
  patientsCount: string;
}