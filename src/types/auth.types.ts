export interface User {
  id: string;
  email: string;
  username: string;
  phone: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export type RegisterRequest = {
  email: string;
  password: string;
  username: string;
  phone: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export interface UpdateUserRequest {
  username: string;
  phone: string;
}

export type AuthResponse = {
  token: string;
  user: User;
};

export type AlarmRequest = {
  datetime: string;
  recurringDays: string; // JSON array as a string
  isRecurring: boolean;
  isEnabled: boolean;
  label: string;
  visibility: 'PRIVATE' | 'SHARED' | 'PUBLIC';
  timezone: string;
};

export type AlarmResponse = {
  id: string;
  datetime: string;
  recurringDays: string;
  isRecurring: boolean;
  isEnabled: boolean;
  label: string;
  visibility: 'PRIVATE' | 'SHARED' | 'PUBLIC';
  timezone: string;
  createdAt: string;
  updatedAt: string;
};
