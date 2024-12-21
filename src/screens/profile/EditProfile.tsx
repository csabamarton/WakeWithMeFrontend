import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Button from '../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { RootState, store } from '../../store';
import Input from '../../components/common/Input';
import { authApi } from '../../api/auth';
import { useDispatch } from 'react-redux';
import { UpdateUserRequest } from '../../types/auth.types';

const EditProfileScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const state = store.getState() as RootState;
    const user = state.auth.user;

    const [username, setUsername] = useState(user?.username || '');
    const [phone, setPhone] = useState(user?.phone || '');

    const handleSaveChanges = async () => {
        const userId = user?.id;
        if (!userId) {
            console.error('User ID is not available.');
            return;
        }

        try {
            console.log('Preparing to save changes:', { username, phone });

            const userUpdateRequest:UpdateUserRequest = {
                username,
                phone,
            };

            const response = await authApi.updateUser(userId, userUpdateRequest);
            console.log('User updated successfully:', response);

            navigation.goBack();
        } catch (error) {
            console.error('Failed to save changes:', error);
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={styles.container}
        >
            <View style={styles.form}>
                <Input
                    label="Username"
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter your username"
                />
                <Input
                    label="Email"
                    value={user?.email || ''}
                    isReadOnly
                />
                <Input
                    label="Phone Number"
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                />
                <Button title="Save Changes" onPress={handleSaveChanges} />
                <Button
                    title="Cancel"
                    onPress={() => navigation.goBack()}
                    secondary
                />
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    form: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },
});

export default EditProfileScreen;
