import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const sampleQuestions = [
    { id: '1', content: 'What is the capital of France?', course: 'Geography', date: '2025-04-20' },
    { id: '2', content: 'Explain Newton\'s First Law of Motion in detail.', course: 'Physics', date: '2025-04-18' },
    { id: '3', content: 'Describe the process of photosynthesis.', course: 'Biology', date: '2025-04-15' },
    { id: '4', content: 'What are the advantages of the Agile methodology?', course: 'Software Engineering', date: '2025-04-12' },
    { id: '5', content: 'Discuss the key features of Object-Oriented Programming.', course: 'Computer Science', date: '2025-04-10' },
    { id: '6', content: 'Calculate the derivative of f(x) = x^3 + 3x^2 - 5x + 7.', course: 'Calculus', date: '2025-04-21' },
    { id: '7', content: 'Explain the Central Limit Theorem and its significance.', course: 'Statistics', date: '2025-04-19' },
    { id: '8', content: 'Find the eigenvalues of the matrix [[2, -1], [-1, 2]].', course: 'Linear Algebra', date: '2025-04-17' },
    { id: '9', content: 'Prove that the sum of two odd numbers is always even.', course: 'Discrete Mathematics', date: '2025-04-16' },
    { id: '10', content: 'What is the probability of drawing two aces from a deck of cards?', course: 'Statistics', date: '2025-04-14' },
    { id: '11', content: 'Evaluate the integral of sin(x)cos(x) dx.', course: 'Calculus', date: '2025-04-13' },
    { id: '12', content: 'State and explain De Morgan\'s Laws with examples.', course: 'Discrete Mathematics', date: '2025-04-11' },
    { id: '13', content: 'Find the inverse of the matrix [[1, 2], [3, 4]].', course: 'Linear Algebra', date: '2025-04-09' },
    { id: '14', content: 'Describe the process of hypothesis testing in statistics.', course: 'Statistics', date: '2025-04-08' },
    { id: '15', content: 'Compute the limit of (x^2 - 1)/(x - 1) as x approaches 1.', course: 'Calculus', date: '2025-04-07' },
    { id: '16', content: 'Write the truth table for the logical expression (P ∧ Q) ∨ ¬R.', course: 'Discrete Mathematics', date: '2025-04-06' },
    { id: '17', content: 'What are the conditions for a matrix to be diagonalizable?', course: 'Linear Algebra', date: '2025-04-05' },
    { id: '18', content: 'Define and explain the Law of Large Numbers.', course: 'Statistics', date: '2025-04-04' },
    { id: '19', content: 'Determine the derivative of ln(x^2 + 1).', course: 'Calculus', date: '2025-04-03' },
    { id: '20', content: 'Prove that every bipartite graph has an even number of vertices in each cycle.', course: 'Discrete Mathematics', date: '2025-04-02' },
    { id: '21', content: 'Explain the difference between scalar multiplication and matrix multiplication.', course: 'Linear Algebra', date: '2025-04-01' },
];


export default function Index() {
    const [searchText, setSearchText] = useState('');

    // Filter questions based on the search text
    const filteredQuestions = sampleQuestions.filter((question) =>
        question.content.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {/* Search Bar */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search Questions by Course,year,Semester.."
                value={searchText}
                onChangeText={setSearchText}
            />

            {/* Scrollable List of Cards */}
            <FlatList
                data={filteredQuestions}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        {/* Question Content */}
                        <Text style={styles.questionContent} numberOfLines={1}>
                            {item.content}
                        </Text>

                        {/* Course and Upload Date */}
                        <View style={styles.footer}>
                            <Text style={styles.courseName}>{item.course}</Text>
                            <Text style={styles.uploadDate}>{item.date}</Text>
                        </View>
                    </View>
                )}
                ListEmptyComponent={<Text style={styles.noResults}>No questions found</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 10,
        elevation: 2,
    },
    questionContent: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    courseName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#555',
    },
    uploadDate: {
        fontSize: 12,
        color: '#888',
    },
    noResults: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
        marginTop: 20,
    },
});
