import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de instalar react-native-vector-icons

const MainScreen = () => {
  const [selectedR, setSelectedR] = useState(null);
  const data = [
    { id: '1', title: 'Rechazar', icon: 'ban', description: 'Evita productos que generan residuos innecesarios.' },
    { id: '2', title: 'Reducir', icon: 'arrow-down', description: 'Minimiza el consumo y el desperdicio.' },
    { id: '3', title: 'Reutilizar', icon: 'repeat', description: 'Da una segunda vida a los objetos.' },
    { id: '4', title: 'Reciclar', icon: 'recycle', description: 'Transforma residuos en nuevos productos.' },
    { id: '5', title: 'Recuperar', icon: 'bolt', description: 'Aprovecha materiales para generar energía u otros usos.' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => setSelectedR(item)}>
      <Icon name={item.icon} size={50} color="#2E7D32" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <Modal visible={selectedR !== null} onRequestClose={() => setSelectedR(null)}>
        {selectedR && (
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedR.title}</Text>
            <Text style={styles.modalDescription}>{selectedR.description}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedR(null)}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#81C784',
    borderRadius: 5,
  },
});

export default MainScreen;