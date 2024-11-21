import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BottomBar from './BottomBar';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Imagen de fondo */}
      <ImageBackground
        source={require('../img/background.jpeg')} // Reemplaza con la ruta de tu imagen
        style={styles.backgroundImage}
        resizeMode="cover"
      >
      <View style={styles.container}>
         <View style={styles.buttonRow}>
          {/* Botón 1 */}
          <TouchableOpacity style={styles.card} onPress={() => console.log('Préstamos Activos')}>
              <View style={styles.cardContent}>
                <Image source={require('../img/Vector.png')}  style={styles.icon} />
                <Text style={styles.cardTitle}>PRÉSTAMOS ACTIVOS</Text>
              </View>
              <View style={styles.cardFooter}>
                <Text style={styles.footerText}>Más Detalles</Text>
                <FontAwesome name="chevron-right" size={16} color="#000" />
              </View>
            </TouchableOpacity>
          {/* Botón 2 */}
          <TouchableOpacity style={styles.card} onPress={() => console.log('Opción 2')}>
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
      </View>
      </ImageBackground>
      <BottomBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Fondo blanco para toda la pantalla
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', // Centra el contenido verticalmente
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Espaciado alrededor de los botones
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Espaciado uniforme entre botones
    alignItems: 'center',
    width: '70%', // Asegura que ocupe todo el ancho disponible
  },
  card: {
    backgroundColor: '#fff', // Fondo blanco
    borderRadius: 10, // Bordes ligeramente curvados
    width: '40%', // Ocupa el 45% del contenedor
    height: 175, // Altura fija para garantizar el footer en la parte inferior
    paddingTop: 20,
    paddingHorizontal: 10,
    paddingBottom: 50, // Espacio para evitar colisiones con el footer
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea los elementos en la parte superior de la tarjeta
    shadowColor: '#000', // Sombra para dar profundidad
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Elevación para Android
    overflow: 'hidden', // Previene el desbordamiento del contenido
  },
  cardContent: {
    flexDirection: 'row', // Elementos en fila
    alignItems: 'center', // Alinear verticalmente
    justifyContent: 'flex-start', // El icono y el texto inician desde la izquierda
    marginVertical: 20, // Espaciado vertical
    width: '100%',
  },
  icon: {
    marginLeft: 15,
    width: 70,  // Ancho de la imagen
    height: 70, // Alto de la imagen
    resizeMode: 'contain', // Asegura que la imagen mantenga sus proporciones
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    flexWrap: 'wrap',  // Permite que el texto se envuelva en múltiples líneas si es necesario
    textAlign: 'center', // Alinea el texto en el centro
    width: '80%', // Asegura que el texto no ocupe todo el espacio disponible
    
  },
  
  cardFooter: {
    position: 'absolute', // Posiciona el footer en la parte inferior
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#b3d4fc', // Azul claro
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
  
})
