import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'; // Importamos SelectList
import BottomBar from "./BottomBar";

export default function EditClient({ route, navigation }) {
  const { client } = route.params; // Recibe los datos del cliente como parámetro
  const [name, setName] = useState(client.nombre);
  const [apellido, setApellido] = useState(client.apellido || ""); // Nuevo campo
  const [cedula, setCedula] = useState(client.cedula);
  const [telefono, setTelefono] = useState(client.telefono);
  const [direccion, setDireccion] = useState(client.direccion);
  const [genero, setGenero] = useState(client.genero || ""); // Nuevo campo

  // Opciones para el selector de género
  const genderOptions = [
    { key: '1', value: 'Masculino' },
    { key: '2', value: 'Femenino' },
    { key: '3', value: 'Otro' },
  ];

  return (
    <ImageBackground
      source={require('../img/background.jpeg')} // Ruta de tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.formContainer}>
        {/* Encabezado */}
        <View style={styles.header}>
          <Text style={styles.headerText}>EDITAR CLIENTE</Text>
        </View>

        {/* Formulario */}
        <View style={styles.section}>
          {/* Fila 1: Nombre, Apellido y Cédula */}
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Ingrese nombre"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Apellido</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Ingrese apellido"
                value={apellido}
                onChangeText={setApellido}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Cédula</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Ingrese cédula"
                value={cedula}
                onChangeText={setCedula}
              />
            </View>
          </View>

          {/* Fila 2: Género, Dirección y Teléfono */}
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Género</Text>
              <SelectList
                setSelected={setGenero}
                data={genderOptions}
                save="value" // Almacena el valor seleccionado
                placeholder="Seleccionar género"
                boxStyles={[styles.input, styles.shadow]}
                dropdownStyles={styles.dropdown} // Estilo para el dropdown
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Dirección</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Ingrese dirección"
                value={direccion}
                onChangeText={setDireccion}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Teléfono</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Ingrese teléfono"
                value={telefono}
                onChangeText={setTelefono}
              />
            </View>
          </View>
        </View>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()} // Volver sin guardar
          >
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              // Aquí se guardaría la edición
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomBar />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    paddingBottom: 10,
  },
  header: {
    backgroundColor: '#d9eafc',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00000066',
    textAlign: 'left',
  },
  section: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  label: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#B1D4E4',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 3,
  },
  dropdown: {
    borderColor: '#c7c7c7',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 5,
    elevation: 3, // Añadido para mantener la sombra en el dropdown
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
  },
  cancelButton: {
    backgroundColor: '#276D9B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: '#0b3d91',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

