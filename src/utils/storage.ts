import { FormSubmission } from '../types';

const STORAGE_KEY = 'felix_fixit_submissions';
const ADMIN_KEY = 'felix_fixit_admin_session';

export const saveFormSubmission = (submission: Omit<FormSubmission, 'id' | 'submittedAt' | 'status' | 'notes'>): FormSubmission => {
  const newSubmission: FormSubmission = {
    ...submission,
    id: generateId(),
    submittedAt: new Date(),
    status: 'new'
  };

  const existingSubmissions = getFormSubmissions();
  const updatedSubmissions = [newSubmission, ...existingSubmissions];
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSubmissions));
  return newSubmission;
};

export const getFormSubmissions = (): FormSubmission[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const submissions = JSON.parse(stored);
    return submissions.map((sub: any) => ({
      ...sub,
      submittedAt: new Date(sub.submittedAt)
    }));
  } catch (error) {
    console.error('Error loading submissions:', error);
    return [];
  }
};

export const updateSubmissionStatus = (id: string, status: FormSubmission['status'], notes?: string): void => {
  const submissions = getFormSubmissions();
  const updatedSubmissions = submissions.map(sub => 
    sub.id === id ? { ...sub, status, notes } : sub
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSubmissions));
};

export const deleteSubmission = (id: string): void => {
  const submissions = getFormSubmissions();
  const filteredSubmissions = submissions.filter(sub => sub.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredSubmissions));
};

export const setAdminSession = (isLoggedIn: boolean): void => {
  localStorage.setItem(ADMIN_KEY, JSON.stringify({ isLoggedIn, timestamp: Date.now() }));
};

export const getAdminSession = (): boolean => {
  try {
    const stored = localStorage.getItem(ADMIN_KEY);
    if (!stored) return false;
    
    const session = JSON.parse(stored);
    const hoursSinceLogin = (Date.now() - session.timestamp) / (1000 * 60 * 60);
    
    // Session expires after 8 hours
    if (hoursSinceLogin > 8) {
      localStorage.removeItem(ADMIN_KEY);
      return false;
    }
    
    return session.isLoggedIn;
  } catch (error) {
    return false;
  }
};

export const clearAdminSession = (): void => {
  localStorage.removeItem(ADMIN_KEY);
};

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};