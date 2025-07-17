export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  stateProvince: string;
  zipCode: string;
  service: string;
  urgency: string;
  message: string;
  submittedAt: Date;
  status: 'new' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
}</parameter>