import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const TopMenuBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image 
        source={ require('../img/Logo.png')}// Reemplaza con tu logo
        style={styles.logosup} 
      />

      {/* Título */}
      <Text style={styles.title}>Menú Principal</Text>

      {/* Botones de navegación */}
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => navigation.navigate('Cliente')}>
          <Text style={styles.menuText}>Cliente</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Prestamos')}>
          <Text style={styles.menuText}>Préstamos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Abonar')}>
          <Text style={styles.menuText}>Abonar</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('Salir')}>
          <Text style={styles.exit}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#283049',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  logosup: {
    width: 50,
    height: 50,
    marginRight: 20,
     
  },
  title: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginHorizontal: 20,
  },
  button: {
    width: 75,
    justifyContent: 'center',
    backgroundColor: '#B0C4DE',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  exit: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default TopMenuBar;
