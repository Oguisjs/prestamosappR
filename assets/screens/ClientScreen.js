import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ImageBackground, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomBar from "./BottomBar";

const eliminar = require('../img/Eliminar.png');
const editar = require('../img/Editar.png');

import { useNavigation } from "@react-navigation/native"; // Importa el hook

const ClientScreen = () => {
  const navigation = useNavigation(); // Accede al objeto de navegación

  const clients = [
    { id: "1", cedula: "12345678", nombre: "Juan Pérez", telefono: "555-1234", direccion: "Calle Falsa 123" },
    { id: "2", cedula: "87654321", nombre: "Ana Gómez", telefono: "555-5678", direccion: "Av. Siempre Viva 456" },
    { id: "3", cedula: "45678901", nombre: "Luis Martínez", telefono: "555-7890", direccion: "Boulevard Sol 789" },
    { id: "4", cedula: "78912345", nombre: "María López", telefono: "555-1122", direccion: "Calle Luna 123" },
    { id: "5", cedula: "32165487", nombre: "Carlos Torres", telefono: "555-3344", direccion: "Av. Mar 456" },
    { id: "6", cedula: "65498732", nombre: "Elena Ruiz", telefono: "555-5566", direccion: "Plaza Sol 789" },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.cedula}</Text>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.telefono}</Text>
      <Text style={styles.cell}>{item.direccion}</Text>
      <View style={styles.actionCell}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate("EditClient", { client: item })} // Navegar con datos del cliente
        >
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
      source={require("../img/background.jpeg")}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
          <Text style={styles.title}>Clientes Activos</Text>
          <TouchableOpacity
            style={styles.newClientButton}
            onPress={() => navigation.navigate("NewClient")} // Navega a la pantalla NewClient
          >
            <Text style={styles.newClientButtonText}>Nuevo Cliente</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar cliente..."
            />
            <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          </View>

          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Cédula</Text>
            <Text style={styles.headerCell}>Nombre Completo</Text>
            <Text style={styles.headerCell}>Teléfono</Text>
            <Text style={styles.headerCell}>Dirección</Text>
            <Text style={styles.headerCell}>Acciones</Text>
          </View>

          <FlatList
            data={clients}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 10 }} // Espacio al final si es necesario
            showsVerticalScrollIndicator={true} // Muest
          />
        </View>
      </SafeAreaView>
      <BottomBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
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
    borderRadius: 10,
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
    paddingBottom: 5,
    maxHeight: 400,
  },
  searchContainer: {
    flexDirection: "row", // Alinea el texto y el ícono horizontalmente
    justifyContent: "flex-end", // Posiciona la barra a la derecha
    alignItems: "center",
    width: "100%", // Ocupa el ancho completo del contenedor
    marginBottom: 10,
  },
  searchInput: {
    width: "50%", // La barra de búsqueda ocupa el 50% del ancho
    height: 40,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#276D9B",
    borderRadius: 5,
    paddingHorizontal: 10,
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
