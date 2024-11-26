import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Image, Dimensions, LayoutAnimation, Platform, UIManager } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BottomBar from './BottomBar';

// Habilitar LayoutAnimation para Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
// Componente para botones en la web
function WebButtons() {
  return (
    <View style={styles.webButtonContainer}>
      <TouchableOpacity style={styles.webCard} onPress={() => console.log('Web: Préstamos Activos')}>
        <View style={styles.cardContent}>
          <Image source={require('../img/Vector.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>PRÉSTAMOS ACTIVOS</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>Más Detalles</Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.webCard} onPress={() => console.log('Web: Clientes Activos')}>
        <View style={styles.cardContent}>
          <Image source={require('../img/clientes.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>CLIENTES ACTIVOS</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>Más Detalles</Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
// Componente para botones en tablets
function TabletButtons() {
  const [isPortrait, setIsPortrait] = useState(true);

  const handleOrientationChange = () => {
    const { width, height } = Dimensions.get('window');
    const portrait = height > width;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsPortrait(portrait);
  };

  useEffect(() => {
    handleOrientationChange();
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => subscription?.remove();
  }, []);

  return (
    <View
    style={[
      styles.tabletButtonRow,
      isPortrait ? styles.tabletButtonRow : styles.tabletButtonColumn,
    ]}
    >
      <TouchableOpacity style={styles.card} onPress={() => console.log('Tablet: Préstamos Activos')}>
        <View style={styles.cardContent}>
          <Image source={require('../img/Vector.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>PRÉSTAMOS ACTIVOS</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>Más Detalles</Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => console.log('Tablet: Clientes Activos')}>
        <View style={styles.cardContent}>
          <Image source={require('../img/clientes.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>CLIENTES ACTIVOS</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>Más Detalles</Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

// Componente para botones en celulares
function MobileButtons() {
  const [isPortrait, setIsPortrait] = useState(true);

  const handleOrientationChange = () => {
    const { width, height } = Dimensions.get('window');
    const portrait = height > width;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsPortrait(portrait);
  };

  useEffect(() => {
    handleOrientationChange();
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);
    return () => subscription?.remove();
  }, []);

  return (
    <View
    style={[
      styles.mobileButtonRow,
      isPortrait ? styles.mobileButtoncolRow : styles.mobileButtonColumn,
    ]}
    >
      <TouchableOpacity style={styles.card} onPress={() => console.log('Celular: Préstamos Activos')}>
        <View style={styles.cardContent}>
          <Image source={require('../img/Vector.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>PRÉSTAMOS ACTIVOS</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>Más Detalles</Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => console.log('Celular: Clientes Activos')}>
        <View style={styles.cardContent}>
          <Image source={require('../img/clientes.png')} style={styles.icon} />
          <Text style={styles.cardTitle}>CLIENTES ACTIVOS</Text>
        </View>
        <View style={styles.cardFooter}>
          <Text style={styles.footerText}>Más Detalles</Text>
          <FontAwesome name="chevron-right" size={16} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default function HomeScreen({ navigation }) {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const { width } = Dimensions.get('window');
    const tablet = width >= 768; // Umbral para diferenciar tablet de móvil
    setIsTablet(tablet);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../img/background.jpeg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {Platform.OS === 'web' ? (
            <WebButtons />
          ) : isTablet ? (
            <TabletButtons />
          ) : (
            <MobileButtons />
          )}
        </View>
      </ImageBackground>
      <BottomBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  // Estilos para botones en celulares
  mobileButtonRow: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row', // Por defecto, columna para móviles
  },
  mobileButtonColumn: {
    flexDirection: 'column', // Cambia a fila para horizontales en móviles
  },
  // Estilos para botones en tablets
  tabletButtonRow: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row', // Por defecto, columna para tablets en vertical
  },
  tabletButtonColumn: {
    flexDirection: 'column', // Cambia a fila para horizontales en tablets
  },
  // Estilos para botones en la web
  webButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  webCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    width: '30%',
    height: 200,
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '40%',
    height: 200,
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 20,
    width: '100%',
  },
  icon: {
    marginLeft: 15,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flexWrap: 'wrap',
    textAlign: 'center',
    width: '80%',
  },
  cardFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#b3d4fc',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 5,
  },
});

  