import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../types/auth.types';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
        state,
        action: PayloadAction<{user: User; token: string}>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      console.log('Redux setCredentials: User and token set', action.payload);
    },
    logout: state => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      console.log('Redux logout: User and token cleared');
    },
  },
});

export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;
