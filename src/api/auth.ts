import axios from 'axios';
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  AlarmRequest,
} from '../types/auth.types';
import {RootState, store} from '../store';
import {setCredentials} from '../store/slices/authSlice';

const API_URL = 'http://10.0.2.2:8080/api';

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, data);

    // Validate the response structure
    if (!response.data.token || !response.data.user) {
      throw new Error('Invalid API response: Missing token or user');
    }

    return response.data;
  },
  register: async (data: RegisterRequest): Promise<void> => {
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/register`, data);
    const {token, user} = response.data;

    // Dispatch to Redux
    store.dispatch(setCredentials({user, token}));
  },
};

export const alarmApi = {
  createAlarm: async (data: AlarmRequest): Promise<void> => {
    const state = store.getState() as RootState;
    const token = state.auth.token;

    if (!token) {
      throw new Error('User is not authenticated');
    }

    await axios.post(`${API_URL}/alarms`, data, {
      headers: {Authorization: `Bearer ${token}`},
    });
  },
};
