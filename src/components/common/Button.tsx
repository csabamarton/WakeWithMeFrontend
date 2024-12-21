import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, secondary = false }) => (
    <TouchableOpacity
        style={[styles.button, secondary && styles.buttonSecondary]}
        onPress={onPress}
    >
        <Text style={[styles.buttonText, secondary && styles.buttonSecondaryText]}>
            {title}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
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
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    buttonSecondary: {
        backgroundColor: '#f0f0f0',
    },
    buttonSecondaryText: {
        color: '#007AFF',
    },
});

export default Button;
