import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoadingScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    'Rechazar (evitar productos que generan residuos innecesarios)',
    'Reducir (minimizar el consumo y el desperdicio)',
    'Reutilizar (dar una segunda vida a los objetos)',
    'Reciclar (transformar residuos en nuevos productos)',
    'Recuperar (aprovechar materiales para generar energía u otros usos)',
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }, 1000); // 1 segundo de retraso

      return () => clearTimeout(timer);
    } else {
      // Navegar a la pantalla principal después de mostrar todos los mensajes
      navigation.replace('Main');
    }
  }, [currentMessageIndex, navigation, messages.length]);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{messages[currentMessageIndex] || ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default LoadingScreen;