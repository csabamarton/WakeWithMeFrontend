import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProps } from '../../types/navigation.types';

const LandingPage = ({ navigation }: NavigationProps) => {
    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <View style={styles.logoContainer}>
                <Text style={styles.logo}>⏰</Text>
                <Text style={styles.title}>Welcome to WakeWithMe</Text>
                <Text style={styles.subtitle}>A social alarm clock for waking up with friends.</Text>
            </View>

            {/* Buttons Section */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonSecondary]}
                onPress={() => navigation.navigate('Register')}
            >
                <Text style={[styles.buttonText, styles.buttonSecondaryText]}>Sign Up</Text>
            </TouchableOpacity>

            {/* Footer Section */}
            <Text style={styles.footer}>
                &copy; 2024 WakeWithMe. All rights reserved.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    logo: {
        fontSize: 48,
        color: '#007AFF',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        width: '100%',
        maxWidth: 400,
        padding: 15,
        marginVertical: 10,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSecondary: {
        backgroundColor: '#f0f0f0',
    },
    buttonSecondaryText: {
        color: '#007AFF',
    },
    footer: {
        marginTop: 20,
        fontSize: 12,
        color: '#aaa',
        textAlign: 'center',
    },
});

export default LandingPage;
