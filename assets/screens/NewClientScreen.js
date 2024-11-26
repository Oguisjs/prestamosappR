import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';  // Importa la librería
import BottomBar from "./BottomBar";

export default function NewClient() {
  const [selectedGender, setSelectedGender] = useState('');
  
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
        {/* Encabezado del formulario */}
        <View style={styles.header}>
          <Text style={styles.headerText}>NUEVO CLIENTE</Text>
        </View>

        {/* Información del Cliente */}
        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nombres</Text>
              <TextInput style={styles.input} placeholder="Ingrese nombres" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Apellidos</Text>
              <TextInput style={styles.input} placeholder="Ingrese apellidos" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Cédula</Text>
              <TextInput style={styles.input} placeholder="Ingrese cédula" />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Género</Text>
              {/* Usamos SelectList para la lista desplegable */}
              <SelectList
                setSelected={setSelectedGender}
                data={genderOptions}
                save="value" // Almacena el valor seleccionado
                placeholder="Seleccionar género"
                boxStyles={styles.input}
                dropdownStyles={styles.dropdown}  // Estilo para el dropdown
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Dirección</Text>
              <TextInput style={styles.input} placeholder="Ingrese dirección" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Teléfono</Text>
              <TextInput style={styles.input} placeholder="Ingrese teléfono" />
            </View>
          </View>
        </View>

        {/* Línea divisora y sección de Garante */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerL} />
          <Text style={styles.dividerText}>INFORMACIÓN {'\n'}SOBRE GARANTE</Text>
          <View style={styles.dividerR} />
        </View>

        <View style={styles.section}>
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput style={styles.input} placeholder="Ingrese nombre" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Apellido</Text>
              <TextInput style={styles.input} placeholder="Ingrese apellido" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Cédula</Text>
              <TextInput style={styles.input} placeholder="Ingrese cédula" />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Teléfono</Text>
              <TextInput style={styles.input} placeholder="Ingrese teléfono" />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Dirección</Text>
              <TextInput style={styles.input} placeholder="Ingrese dirección" />
            </View>
          </View>
        </View>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <BottomBar/>
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
  dropdown: {
    borderColor: '#c7c7c7',
    borderRadius: 5,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  dividerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#757575',
    marginLeft: 10,
    marginRight: 10,
  },
  dividerL: {
    width: 20,
    height: 5,
    backgroundColor: '#B1D4E49C',
  },
  dividerR: {
    flex: 1,
    height: 5,
    width: 2,
    backgroundColor: '#B1D4E49C',
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
