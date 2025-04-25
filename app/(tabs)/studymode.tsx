import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';

type Document = {
  id: string;
  name: string;
  type: string;
  date: string;
}
export default function StudyMode() {
  const [allDocuments, setAllDocuments] = useState<Document[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Simulate fetching documents (you can replace this with FileSystem logic)
    const fetchDocuments = async () => {
      // Replace this with logic for listing files from specific directories
      const mockDocuments = [
        { id: '1', name: 'Linear_Algebra.pdf', type: 'pdf', date: '2025-04-20' },
        { id: '2', name: 'Discrete_Maths.docx', type: 'docx', date: '2025-04-19' },
        { id: '3', name: 'Statistics_notes.pdf', type: 'pdf', date: '2025-04-18' },
        { id: '4', name: 'Calculus_Handbook.docx', type: 'docx', date: '2025-04-17' },
        { id: '5', name: 'Probability_Tips.pdf', type: 'pdf', date: '2025-04-16' },
      ];
      setAllDocuments(mockDocuments);
      setFilteredDocuments(mockDocuments);
    };

    fetchDocuments();
  }, []);

  // Handle Search Functionality
  const handleSearch = (query:string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredDocuments(allDocuments);
    } else {
      const lowerQuery = query.toLowerCase();
      const results = allDocuments.filter((doc) =>
          doc.name.toLowerCase().includes(lowerQuery)
      );
      setFilteredDocuments(results);
    }
  };

  return (
      <View style={styles.container}>
        {/* Top Controls */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="filter" size={20} color="#fff" />
            <Text style={styles.buttonText}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="sort" size={20} color="#fff" />
            <Text style={styles.buttonText}>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome name="folder-open" size={20} color="#fff" />
            <Text style={styles.buttonText}>Folder</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={20} color="#666" />
          <TextInput
              style={styles.searchInput}
              placeholder="Search documents..."
              value={searchQuery}
              onChangeText={handleSearch}
          />
        </View>

        {/* Document List */}
        <FlatList
            data={filteredDocuments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.documentCard}>
                  <View style={styles.documentTop}>
                    <Text style={styles.documentName} numberOfLines={1}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={styles.documentBottom}>
                    <Text style={styles.documentType}>{item.type.toUpperCase()}</Text>
                    <Text style={styles.documentDate}>{item.date}</Text>
                  </View>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  topBar: {
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
    marginLeft: 5,
    color: '#fff',
    fontSize: 14,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  documentCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  documentTop: {
    marginBottom: 5,
  },
  documentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  documentBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  documentType: {
    fontSize: 14,
    color: '#007AFF',
  },
  documentDate: {
    fontSize: 14,
    color: '#666',
  },
});
