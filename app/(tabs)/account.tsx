import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
// @ts-ignore
import profileImage from '../../assets/images/logo.png';

export default function MyAccount() {
    const handleLogout = () => {
        alert('Logged out successfully!');
    };

    const documents = [
        { id: '1', name: 'Introduction to Algorithms.pdf', type: 'PDF', date: '2025-04-01' },
        { id: '2', name: 'Linear Algebra Notes.docx', type: 'DOCX', date: '2025-03-28' },
        { id: '3', name: 'Discrete Math Questions.pdf', type: 'PDF', date: '2025-03-25' },
    ];

    const history = [
        { id: '1', action: 'Viewed document: Linear Algebra Notes', date: '2025-04-23' },
        { id: '2', action: 'Completed course: Introduction to Discrete Math', date: '2025-04-20' },
    ];

    const courses = [
        { id: '1', title: 'Introduction to Programming', progress: '80%' },
        { id: '2', title: 'Data Structures and Algorithms', progress: '50%' },
    ];

    const bookmarkedQuestions = [
        { id: '1', question: 'How does Dijkstra’s algorithm work?' },
        { id: '2', question: 'What are the differences between TCP and UDP?' },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image
                    style={styles.profileImage}
                    source={profileImage}
                />
                <Text style={styles.profileName}>Oscar Madegwa</Text>
                <Text style={styles.profileEmail}>madegwaoscar317@gmail.com</Text>
            </View>

            {/* Account Details */}
            <View style={styles.detailsSection}>
                <Text style={styles.detailTitle}>Account Details</Text>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Username:</Text>
                    <Text style={styles.detailValue}>madegwa-o</Text>
                </View>
                <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>Membership:</Text>
                    <Text style={styles.detailValue}>Premium</Text>
                </View>
            </View>

            {/* Uploaded Documents */}
            <View style={styles.section}>
                <Text style={styles.detailTitle}>Uploaded Documents</Text>
                {documents.length > 0 ? (
                    documents.map((doc) => (
                        <View key={doc.id} style={styles.listItem}>
                            <Text style={styles.itemText}>{doc.name}</Text>
                            <Text style={styles.itemSubText}>{doc.date}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noItems}>No documents uploaded</Text>
                )}
            </View>

            {/* History */}
            <View style={styles.section}>
                <Text style={styles.detailTitle}>History</Text>
                {history.length > 0 ? (
                    history.map((entry) => (
                        <View key={entry.id} style={styles.listItem}>
                            <Text style={styles.itemText}>{entry.action}</Text>
                            <Text style={styles.itemSubText}>{entry.date}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noItems}>No history available</Text>
                )}
            </View>

            {/* Your Courses */}
            <View style={styles.section}>
                <Text style={styles.detailTitle}>Your Courses</Text>
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <View key={course.id} style={styles.listItem}>
                            <Text style={styles.itemText}>{course.title}</Text>
                            <Text style={styles.itemSubText}>Progress: {course.progress}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noItems}>No courses enrolled</Text>
                )}
            </View>

            {/* Bookmarked Questions */}
            <View style={styles.section}>
                <Text style={styles.detailTitle}>Bookmarked Questions</Text>
                {bookmarkedQuestions.length > 0 ? (
                    bookmarkedQuestions.map((question) => (
                        <View key={question.id} style={styles.listItem}>
                            <Text style={styles.itemText}>{question.question}</Text>
                        </View>
                    ))
                ) : (
                    <Text style={styles.noItems}>No bookmarked questions</Text>
                )}
            </View>

            {/* Logout Button */}
            <Button title="Logout" onPress={handleLogout} color="#FF6347" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
    profileSection: { alignItems: 'center', marginBottom: 30 },
    profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
    profileName: { fontSize: 24, fontWeight: 'bold' },
    profileEmail: { fontSize: 16, color: '#666' },
    detailsSection: { marginBottom: 20 },
    detailTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    detailRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
    detailLabel: { fontSize: 16, fontWeight: '600' },
    detailValue: { fontSize: 16, color: '#555' },
    section: { marginBottom: 20 },
    listItem: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
    itemText: { fontSize: 16, color: '#333' },
    itemSubText: { fontSize: 14, color: '#888' },
    noItems: { textAlign: 'center', fontSize: 16, color: '#888', marginTop: 20 },
});
