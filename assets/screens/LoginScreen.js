import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground} from 'react-native';


const logo = require('../img/Logo.png');
const background = require('../img/background.jpeg');

export default function LoginScreen({navigation}) {
  return (
    <ImageBackground  style={styles.background} source={background}>
    <View style={styles.container} background={background} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput style={styles.input} placeholder="Ingrese su usuario" placeholderTextColor="#bbb" />
        
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Ingrese su contraseña" placeholderTextColor="#bbb" secureTextEntry />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}
const { width, height } = Dimensions.get('window');
const isPortrait = height > width;


const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajusta cómo se escala la imagen
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    width: 500,
    height: 500, 
    backgroundColor: '#2D3A50',
    borderRadius: 30,
    padding: 100,
    alignItems: 'center',
    justifyContent: 'center',
   // Deja espacio para el logo
  },
  logoContainer: {
      width: 100,
      height: 100,
      backgroundColor: '#2D3A50',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 120, // Hace que sobresalga por encima del contenedor principal
      zIndex: 2, // Garantiza que el logo esté por encima de otros elementos
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#2D3A50',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#B0C4DE',
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

