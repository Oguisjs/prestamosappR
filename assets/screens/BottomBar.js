import React from 'react';
import { View, StyleSheet } from 'react-native';

const BottomBar = () => {
  return <View style={styles.bar} />;
};

const styles = StyleSheet.create({
  bar: {
    height: 50, // Altura del rectángulo
    backgroundColor: '#283049', // Color sólido de fondo
    width: '100%', // Ocupa el ancho completo
    position: 'absolute', // Posiciona en la parte inferior
    bottom: 0,
  },
});

export default BottomBar;
