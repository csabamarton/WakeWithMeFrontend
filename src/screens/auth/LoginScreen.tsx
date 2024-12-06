
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authApi } from '../../api/auth';
import { setCredentials } from '../../store/slices/authSlice';
import type { NavigationProps } from '../../types/navigation.types';
import LoadingSpinner from '../../components/common/LoadinSpinner.tsx';

const LoginScreen = ({ navigation }: NavigationProps) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const response = await authApi.login({ email, password });
            await AsyncStorage.setItem('token', response.token);
            dispatch(setCredentials(response));
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
            // You might want to show an error message to the user
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <Button title="Login" onPress={handleLogin} />
                    <Button
                        title="Register"
                        onPress={() => navigation.navigate('Register')}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
    },
});

export default LoginScreen;
