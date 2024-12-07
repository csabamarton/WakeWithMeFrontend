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

export type AuthResponse = {
  token: string;
  user: User;
};
