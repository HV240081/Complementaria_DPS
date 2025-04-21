import React from 'react';
import { View, StyleSheet, Text, Button, Image, ScrollView } from 'react-native';

const DetalleMaravillas = ({ route, navigation }) => {
  const { maravilla } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: maravilla.imagen }} style={styles.imagen} />
      <Text style={styles.titulo}>{maravilla.nombre}</Text>
      <Text style={styles.descripcion}>{maravilla.descripcion}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagen: {
    width: 300,
    height: 200,
    marginBottom: 16,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 24,
  },
});

export default DetalleMaravillas;
