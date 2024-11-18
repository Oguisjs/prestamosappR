import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopMenuBar from './assets/screens/TopMenuBar';
import HomeScreen from './assets/screens/HomeScreen';
import LoginScreen from './assets/screens/LoginScreen';
import BottomBar from './assets/screens/BottomBar';

const ClienteScreen = () => <Text>Cliente Screen</Text>;
const PrestamosScreen = () => <Text>Préstamos Screen</Text>;
const AbonarScreen = () => <Text>Abonar Screen</Text>;
const SalirScreen = () => <Text>Saliendo...</Text>; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
          header: ({ navigation }) => <TopMenuBar navigation={navigation} />,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cliente" component={ClienteScreen} />
        <Stack.Screen name="Prestamos" component={PrestamosScreen} />
        <Stack.Screen name="Abonar" component={AbonarScreen} />
        <Stack.Screen name="Salir" component={SalirScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false, // Desactiva el encabezado para el login
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
