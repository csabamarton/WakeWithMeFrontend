import AsyncStorage from '@react-native-async-storage/async-storage';

export const tokenManager = {
    saveToken: async (token: string) => {
        await AsyncStorage.setItem('AUTH_TOKEN', token);
    },
    getToken: async (): Promise<string | null> => {
        return await AsyncStorage.getItem('AUTH_TOKEN');
    },
    removeToken: async () => {
        await AsyncStorage.removeItem('AUTH_TOKEN');
    },
};
