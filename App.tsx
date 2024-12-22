import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './src/store';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import CreateAlarmScreen from './src/screens/alarm/CreateAlarmScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import type {RootStackParamList} from './src/types/navigation.types';
import LandingScreen from "./src/screens/auth/LandingScreen.tsx";
import EditProfileScreen from './src/screens/profile/EditProfile.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

const noBackButtonOption = {
    headerLeft: () => null,
    headerBackVisible: false,
};

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Landing">
                    <Stack.Screen
                        name="Landing"
                        component={LandingScreen}
                        options={noBackButtonOption}
                    />

                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={noBackButtonOption}
                    />
                    <Stack.Screen name="CreateAlarm" component={CreateAlarmScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    <Stack.Screen name="EditProfile" component={EditProfileScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
