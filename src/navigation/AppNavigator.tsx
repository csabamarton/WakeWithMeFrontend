import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {useAuthCheck} from '../hooks/useAuthCheck';
import {RootState} from '../store/store';
import LoginScreen from '../screens/auth/LoginScreen.tsx';
import RegisterScreen from '../screens/auth/RegisterScreen.tsx';
import LoadingSpinner from '../components/common/LoadinSpinner.tsx';
import HomeScreen from '../screens/home/HomeScreen.tsx';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {token, isLoading} = useSelector((state: RootState) => state.auth);
  useAuthCheck();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!token ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* Add other protected screens here */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
