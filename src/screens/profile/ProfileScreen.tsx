import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { NavigationProps } from '../../types/navigation.types';
import Button from '../../components/common/Button';
import { commonStyles } from '../../styles/commonStyles';

const ProfileScreen: React.FC<NavigationProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        navigation.navigate('Landing');
    };

    return (
        <View style={commonStyles.container}>
            <Avatar username={user?.username} />
            <UserInfo username={user?.username} email={user?.email} />
            <Button
                title="Edit Profile"
                onPress={() => navigation.navigate('EditProfile')}
            />
            <Button
                title="Change Password"
                onPress={() => navigation.navigate('ChangePassword')}
                secondary
            />
            <Button title="Logout" onPress={handleLogout} secondary />
        </View>
    );
};

const Avatar: React.FC<{ username?: string }> = ({ username }) => (
    <View style={styles.avatar}>
        <Text style={styles.avatarText}>
            {username?.charAt(0).toUpperCase() || 'U'}
        </Text>
    </View>
);

const UserInfo: React.FC<{ username?: string; email?: string }> = ({ username, email }) => (
    <>
        <Text style={styles.username}>{username || 'User Name'}</Text>
        <Text style={styles.email}>{email || 'user@example.com'}</Text>
    </>
);

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatarText: {
        color: 'white',
        fontSize: 36,
        fontWeight: 'bold',
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    email: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
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

export default ProfileScreen;
