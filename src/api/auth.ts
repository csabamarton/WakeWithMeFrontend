import axios from 'axios';
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  AlarmRequest, AlarmResponse,
} from '../types/auth.types';
import {RootState, store} from '../store';
import {setCredentials} from '../store/slices/authSlice';

const API_URL = 'http://10.0.2.2:8080/api';

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    console.log('Sending login request with data:', data); // Log request data
    const response = await axios.post<AuthResponse>(`${API_URL}/auth/login`, data);
    console.log('Login API response:', response.data); // Log response data
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
    const state = store.getState() as RootState; // Access Redux state
    const token = state.auth.token;
    const userId = state.auth.user?.id; // Retrieve userId from Redux state

    if (!token || !userId) {
      throw new Error('User is not authenticated or missing userId');
    }

    const alarmRequest = {
      ...data,
      userId,
    };

    console.log('Sending alarm creation request with data:', alarmRequest);

    await axios.post(`${API_URL}/alarms`, alarmRequest, {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
  getAlarmsByUserId: async (userId: string): Promise<AlarmResponse[]> => {
    const state = store.getState() as RootState;
    const token = state.auth.token;

    if (!token) {
      throw new Error('User is not authenticated');
    }

    console.log('Fetching alarms for userId:', userId);

    const response = await axios.get<AlarmResponse[]>(`${API_URL}/alarms/user/${userId}`, {
      headers: {Authorization: `Bearer ${token}`},
    });

    console.log('Fetched alarms:', response.data);

    return response.data;
  },
};
