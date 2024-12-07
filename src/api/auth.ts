import axios from 'axios';
import {AuthResponse, LoginRequest, RegisterRequest} from '../types/auth.types';

//const API_URL = 'http://localhost:8080/api';
const API_URL = 'http://10.0.2.2:8080/api';

// For physical Android device
// const API_URL = 'http://YOUR_MACHINE_IP:8080/api';

// For iOS Simulator
// const API_URL = 'http://localhost:8080/api';

export const authApi = {
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
  },

  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await axios.post(`${API_URL}/auth/register`, {
      email: data.email,
      password: data.password,
      username: data.username,
      phone: data.phone
    });
    return response.data;
  },
};
