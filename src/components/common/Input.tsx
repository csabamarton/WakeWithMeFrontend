// components/common/Input.tsx
import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

type InputProps = {
    label: string;
    value: string;
    onChangeText?: (text: string) => void; // Optional for read-only fields
    placeholder?: string;
    isReadOnly?: boolean;
    keyboardType?: 'default' | 'email-address' | 'phone-pad';
};

const Input = ({
                   label,
                   value,
                   onChangeText,
                   placeholder,
                   isReadOnly = false,
                   keyboardType = 'default',
               }: InputProps) => (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={[styles.input, isReadOnly && styles.disabled]}
            value={value}
            onChangeText={text => !isReadOnly && onChangeText?.(text)}
            placeholder={placeholder}
            editable={!isReadOnly}
            keyboardType={keyboardType}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: {
        marginBottom: 5,
        color: '#666',
    },
    input: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f8f8f8',
    },
    disabled: {
        backgroundColor: '#f5f5f5',
        color: '#aaa',
    },
});

export default Input;
