import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ImageBackground, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const eliminar = require('../img/Eliminar.png');
const editar = require('../img/Editar.png');

const ClientScreen = () => {
  // Datos de ejemplo
  const clients = [
    { id: "1", cedula: "12345678", nombre: "Juan Pérez", telefono: "555-1234", direccion: "Calle Falsa 123" },
    { id: "2", cedula: "87654321", nombre: "Ana Gómez", telefono: "555-5678", direccion: "Av. Siempre Viva 456" },
    { id: "3", cedula: "45678901", nombre: "Luis Martínez", telefono: "555-7890", direccion: "Boulevard Sol 789" },
  ];

  // Renderizador de cada fila
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.cedula}</Text>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.telefono}</Text>
      <Text style={styles.cell}>{item.direccion}</Text>
      <View style={styles.actionCell}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={editar} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
        <Image source={eliminar} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require('../img/background.jpeg')} // Reemplaza con tu imagen de fondo
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Barra Azul */}
        <View style={styles.headerBar}>
          <Text style={styles.title}>Clientes Activos</Text>
          <TouchableOpacity style={styles.newClientButton}>
            <Text style={styles.newClientButtonText}>Nuevo Cliente</Text>
          </TouchableOpacity>
        </View>

        {/* Tabla con bordes y centrada */}
        <View style={styles.tableContainer}>
          {/* Campo de búsqueda */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar cliente..."
            />
            <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          </View>

          {/* Encabezado de la tabla */}
          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Cédula</Text>
            <Text style={styles.headerCell}>Nombre Completo</Text>
            <Text style={styles.headerCell}>Teléfono</Text>
            <Text style={styles.headerCell}>Dirección</Text>
            <Text style={styles.headerCell}>Acciones</Text>
          </View>

          {/* Lista de clientes */}
          <FlatList
            data={clients}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Asegura que la imagen cubra el fondo
    justifyContent: "center", // Centra verticalmente el contenido
    alignItems: "center", // Centra horizontalmente el contenido
  },
  container: {
    width: "90%", // Ancho de la tabla (90% de la pantalla)
    backgroundColor: "#fff", // Fondo blanco para contraste
    borderRadius: 15,
    overflow: "hidden", // Esquinas redondeadas
    elevation: 5, // Sombra en Android
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    
    
  },
  headerBar: {
    backgroundColor: "#B1D4E466",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00000066",
  },
  newClientButton: {
    backgroundColor: "#276D9B",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  newClientButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  tableContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#276D9BDE",
    
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#e0e0e0",
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
  actionCell: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
  },
  iconButton: {
    paddingHorizontal: 5,
  },
});

export default ClientScreen;
