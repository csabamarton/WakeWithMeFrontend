import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setCredentials} from '../store/slices/authSlice';
import {authApi} from '../api/auth';

export const useAuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        try {
          // You might want to add an endpoint to validate token/get user info
          // const user = await authApi.getCurrentUser();
          // dispatch(setCredentials({ token, user }));
        } catch {
          await AsyncStorage.removeItem('token');
        }
      }
    };

    checkAuth();
  }, [dispatch]);
};
