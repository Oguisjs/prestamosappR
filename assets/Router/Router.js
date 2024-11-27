import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TopMenuBar from '../../components/TopMenuBar';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ClientScreen from '../screens/ClientScreen';
import PayScreen from '../screens/PayScreen';
import LoansScreen from '../screens/LoansScreen';
import NewClientScreen from '../screens/NewClientScreen';
import EditClient from '../screens/EditClient';
import NewLoan from '../screens/NewLoan';
import SearchLoansScreen from '../screens/SearchLoansScreen';
import {Text} from "react-native";

const ClienteScreen = () => <Text>Cliente Screen</Text>;
const PrestamosScreen = () => <Text>Préstamos Screen</Text>;
const AbonarScreen = () => <Text>Abonar Screen</Text>;
const SalirScreen = () => <Text>Saliendo...</Text>; 

const Stack = createStackNavigator();


export default function Router(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
          header: ({ navigation }) => <TopMenuBar navigation={navigation} />,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cliente" component={ClientScreen} />
        <Stack.Screen name="Prestamos" component={LoansScreen} />
        <Stack.Screen name="Abonar" component={PayScreen} />
        <Stack.Screen name="Salir" component={SalirScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false, // Desactiva el encabezado para el login
          }}
        />
        <Stack.Screen
          name="NewClient" // Nueva pantalla
          component={NewClientScreen}
        />
        <Stack.Screen name="EditClient" component={EditClient} options={{ title: 'Editar Cliente' }} />
        <Stack.Screen name="NewLoan" component={NewLoan} options={{ title: 'Nuevo Prestamo' }} /> 
        <Stack.Screen name="SearchLoansScreen" component={SearchLoansScreen} options={{ title: 'Prestamos' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
    );
}