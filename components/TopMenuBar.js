import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

const logo = require('../assets/img/Logo.png');

const TopMenuBar = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Obtener la pantalla activa
  const currentRouteName = useNavigationState((state) => state.routes[state.index].name);

  // Definir el título dinámico según la pantalla actual
  const getTitle = () => {
    switch (currentRouteName) {
      case 'Cliente':
        return 'Cliente';
      case 'Prestamos':
        return 'Préstamos';
      case 'Abonar':
        return 'Abonar';
      case 'Salir':
        return 'Salir';
      default:
        return 'Menu Principal';
    }
  };

  // Opciones del menú
  const menuOptions = [
    { label: 'Menú Principal', navigateTo: 'Home' },
    { label: 'Cliente', navigateTo: 'Cliente' },
    { label: 'Préstamos', navigateTo: 'Prestamos' },
    { label: 'Abonar', navigateTo: 'Abonar' },
    { label: 'Salir', navigateTo: 'Salir' },
  ];

  // Filtrar opciones para no mostrar la actual
  const filteredMenuOptions = menuOptions.filter(
    (option) => option.navigateTo !== currentRouteName
  );

  return (
    <SafeAreaView style={styles.bgcolor}>
      <View style={styles.container}>
        {/* Logo y título dinámico */}
        <View style={styles.leftSection}>
          <Image source={logo} style={styles.logosup} />
          <Text style={styles.title}>{getTitle()}</Text>
        </View>

        {/* Menú hamburguesa en móvil o menú horizontal en web */}
        {Platform.OS === 'web' ? (
          <View style={styles.menuHorizontal}>
            {filteredMenuOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(option.navigateTo)}
                style={[
                  styles.menuItem,
                  option.label === 'Salir' && styles.exitButtonWeb, // Aplicar fondo solo a "Salir" en web
                ]}
              >
                <Text
                  style={[
                    styles.menuText,
                    option.label === 'Salir' && styles.exitTextWeb, // Estilo especial para "Salir" en web
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <TouchableOpacity onPress={() => setMenuVisible(!menuVisible)}>
            <Text style={styles.hamburgerMenu}>☰</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Menú desplegable en móvil */}
      {menuVisible && Platform.OS !== 'web' && (
        <View style={styles.dropdownMenu}>
          {filteredMenuOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setMenuVisible(false);
                navigation.navigate(option.navigateTo);
              }}
            >
              <Text style={styles.menuText}>{option.label}</Text>
            </TouchableOpacity>
          ))}

          {/* Botón para cerrar el menú */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setMenuVisible(false)}
          >
            <Text style={styles.closeButtonText}>Cerrar Menú</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgcolor: {
    backgroundColor: '#283049',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#283049',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logosup: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  hamburgerMenu: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  menuHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  menuItem: {
    marginHorizontal: 20,
  },
  exitButtonWeb: {
    backgroundColor: '#276D9B',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  exitTextWeb: {
    color: '#FFFFFF', // Texto blanco para "Salir"
  },
  dropdownMenu: {
    backgroundColor: '#283049',
    padding: 10,
    position: 'absolute',
    top: 60,
    right: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#B0C4DE',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#283049',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TopMenuBar;
