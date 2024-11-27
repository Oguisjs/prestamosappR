import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import BottomBar from "./BottomBar";

export default function NewLoan() {
  const navigation = useNavigation();
  const [selectedInterestRate, setSelectedInterestRate] = useState('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('');

  const interestRateOptions = [
    { key: '1', value: '5%' },
    { key: '2', value: '10%' },
    { key: '3', value: '15%' },
  ];

  const paymentModeOptions = [
    { key: '1', value: 'Mensual' },
    { key: '2', value: 'Quincenal' },
  ];

  return (
    <ImageBackground
      source={require('../img/background.jpeg')}
      style={styles.background}
    >
      <View style={styles.formContainer}>
        {/* Encabezado del formulario */}
        <View style={styles.header}>
          <Text style={styles.headerText}>NUEVO PRÉSTAMO</Text>
        </View>

        {/* Contenedor con tamaño limitado y scroll */}
        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.section}>
              {/* Primera fila */}
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Cliente</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Ingrese cliente" />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Cédula</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Ingrese cédula" />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Teléfono</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Ingrese teléfono" />
                </View>
              </View>

              {/* Segunda fila */}
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Dirección</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Ingrese dirección" />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Garante</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Ingrese garante" />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Monto Capital</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Ingrese monto capital" keyboardType="numeric" />
                </View>
              </View>

              {/* Tercera fila */}
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Tasa de Interés %</Text>
                  <SelectList
                    setSelected={setSelectedInterestRate}
                    data={interestRateOptions}
                    save="value"
                    placeholder="Seleccionar Tasa de Interés"
                    boxStyles={[styles.input, styles.shadow]}
                    dropdownStyles={styles.dropdown}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Modalidad de Pago</Text>
                  <SelectList
                    setSelected={setSelectedPaymentMode}
                    data={paymentModeOptions}
                    save="value"
                    placeholder="Seleccionar Modalidad"
                    boxStyles={[styles.input, styles.shadow]}
                    dropdownStyles={styles.dropdown}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Tiempo (Meses)</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Ingrese tiempo en meses" keyboardType="numeric" />
                </View>
              </View>

              {/* Cuarta fila */}
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Interés</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Calculado automáticamente" editable={false} />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Monto Mensual</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Calculado automáticamente" editable={false} />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Total de Cuotas</Text>
                  <TextInput style={[styles.input, styles.shadow]} placeholder="Calculado automáticamente" editable={false} />
                </View>
              </View>

              {/* Quinta fila */}
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Monto Total</Text>
                  <TextInput style={[styles.input, styles.shadow, styles.halfWidth]} placeholder="Calculado automáticamente" editable={false} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* Botones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText} onPress={() => navigation.goBack()}>
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.buttonText}>
              Crear
            </Text>
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
    maxHeight: '85%', // Ajusta la altura total
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
  scrollContainer: {
    height: '70%', // Ajusta el área desplazable
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 20,
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
  halfWidth: {
    width: '50%',
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
