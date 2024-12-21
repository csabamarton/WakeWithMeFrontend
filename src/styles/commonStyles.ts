// styles/commonStyles.ts
import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    button: {
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonPrimary: {
        backgroundColor: '#007AFF',
        color: '#FFFFFF',
    },
    buttonSecondary: {
        backgroundColor: '#f0f0f0',
        color: '#007AFF',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        marginBottom: 15,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardHighlighted: {
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
    },
    visibilityButton: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ccc',
    },
    visibilityButtonSelected: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    visibilityText: {
        fontSize: 16,
        color: '#666',
    },
    visibilityTextSelected: {
        color: '#fff',
    },
});
