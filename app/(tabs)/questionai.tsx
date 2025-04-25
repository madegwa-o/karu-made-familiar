import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function QuestionAi() {
    return (
        <View style={styles.container}>
            {/* Top Text Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Question AI</Text>
                <Text style={styles.subtitle}>Scan or upload a paper to get started</Text>
            </View>

            {/* Main Interaction Section */}
            <View style={styles.body}>
                <Text style={styles.infoText}>Ask a question or upload a paper for analysis:</Text>
            </View>

            {/* Bottom Panel */}
            <View style={styles.bottomPanel}>
                {/* Buttons for Document and Photo */}
                <View style={styles.buttonPanel}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="plus-circle" size={20} color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="camera" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Input Section */}
                <View style={styles.inputPanel}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your question here..."
                        placeholderTextColor="#aaa"
                    />
                    <TouchableOpacity style={styles.sendButton}>
                        <FontAwesome name="send" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    body: {
        flex: 1,
        padding: 20,
    },
    infoText: {
        fontSize: 18,
        color: '#333',
    },
    bottomPanel: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
        padding: 10,
    },
    buttonPanel: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
    },
    buttonText: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 14,
    },
    inputPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    input: {
        flex: 1,
        height: 40,
        color: '#333',
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
    },
});
