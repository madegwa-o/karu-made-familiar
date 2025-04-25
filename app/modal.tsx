import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default function ModalScreen() {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const handleUploadDocuments = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
      multiple: true,
    });
    if (result) {
      console.log('Selected Documents:', result);
    } else {
      console.log('Document selection was canceled.');
    }
  };

  const handleUploadImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });
    if (!result.canceled) {
      console.log('Selected Images:', result.assets);
    }
  };

  return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={styles.instructionText}>Click The Plus button below to either upload Exams as Photos or documents</Text>
        <TouchableOpacity
            style={[styles.iconButton, { backgroundColor: colors.card }]}
            onPress={() => setModalVisible(true)}
        >
          <FontAwesome name="plus" size={24} color={colors.text} />
        </TouchableOpacity>

        <Modal
            transparent
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={[styles.modalContent, { backgroundColor: colors.card }]}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Choose Upload Option
              </Text>
              <TouchableOpacity
                  style={[styles.optionButton, { backgroundColor: colors.primary }]}
                  onPress={handleUploadDocuments}
              >
                <Text style={styles.optionButtonText}>Upload as Documents</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.optionButton, { backgroundColor: colors.primary }]}
                  onPress={handleUploadImages}
              >
                <Text style={styles.optionButtonText}>Upload as Images</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.cancelButton, { borderColor: colors.text }]}
                  onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.cancelButtonText, { color: colors.text }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    padding: 15,
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cancelButton: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
