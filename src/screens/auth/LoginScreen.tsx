import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authApi} from '../../api/auth';
import {setCredentials} from '../../store/slices/authSlice';
import type {NavigationProps} from '../../types/navigation.types';
import LoadingSpinner from '../../components/common/LoadinSpinner.tsx';

const LoginScreen = ({ navigation }: NavigationProps) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setIsLoading(true);

            // Call API
            const response = await authApi.login({email, password});

            // Save token to AsyncStorage
            await AsyncStorage.setItem('token', response.token);

            // Dispatch to Redux
            dispatch(setCredentials({user: response.user, token: response.token}));

            // Navigate to Home
            navigation.navigate('Home');
        } catch (error) {
            console.error('Login failed:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    {/* App Logo/Name */}
                    <View style={styles.logoContainer}>
                        <Text style={styles.logoEmoji}>⏰</Text>
                        <Text style={styles.logoText}>WakeWithMe</Text>
                        <Text style={styles.logoSubtext}>Wake up with friends</Text>
                    </View>

                    {/* Login Form */}
                    <View style={styles.formContainer}>
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="user@example.com"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="••••••••"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={handleLogin}
                        >
                            <Text style={styles.loginButtonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Register Link */}
                    <View style={styles.registerContainer}>
                        <Text style={styles.registerText}>
                            Don't have an account?{' '}
                            <Text
                                style={styles.registerLink}
                                onPress={() => navigation.navigate('Register')}
                            >
                                Sign up
                            </Text>
                        </Text>
                    </View>
                </>
            )}
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logoEmoji: {
        fontSize: 32,
        color: '#2196F3',
        marginBottom: 10,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    logoSubtext: {
        color: '#666',
        fontSize: 14,
    },
    formContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    inputGroup: {
        marginBottom: 15,
    },
    label: {
        color: '#666',
        marginBottom: 5,
    },
    input: {
        padding: 12,
        backgroundColor: '#f8f8f8',
        borderRadius: 4,
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#2196F3',
        padding: 12,
        borderRadius: 4,
        alignItems: 'center',
        marginTop: 5,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    registerContainer: {
        alignItems: 'center',
    },
    registerText: {
        color: '#666',
    },
    registerLink: {
        color: '#2196F3',
        textDecorationLine: 'underline',
    }
});

export default LoginScreen;
