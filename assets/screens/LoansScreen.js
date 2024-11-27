import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, SafeAreaView, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomBar from "./BottomBar";
import { useNavigation } from "@react-navigation/native";

const LoanScreen = () => {
  const navigation = useNavigation();

  // Lista de préstamos de ejemplo
  const initialLoans = [
    { id: "1", cliente: "Juan Pérez", monto: "2000 RD", plazo: "12 meses", tasa: "10%" },
    { id: "2", cliente: "Ana Gómez", monto: "3000 RD", plazo: "24 meses", tasa: "12%" },
    { id: "3", cliente: "Luis Martínez", monto: "1500 RD", plazo: "6 meses", tasa: "8%" },
    { id: "4", cliente: "María López", monto: "2500 RD", plazo: "18 meses", tasa: "11%" },
    { id: "5", cliente: "Carlos Torres", monto: "4000 RD", plazo: "36 meses", tasa: "13%" },
  ];

  const [loans, setLoans] = useState(initialLoans); // Estado para almacenar préstamos
  const [searchQuery, setSearchQuery] = useState(""); // Estado para el texto de búsqueda

  // Filtrar préstamos según la búsqueda
  const filteredLoans = loans.filter((loan) =>
    loan.cliente.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.cliente}</Text>
      <Text style={styles.cell}>{item.monto}</Text>
      <Text style={styles.cell}>{item.plazo}</Text>
      <Text style={styles.cell}>{item.tasa}</Text>
      <View style={styles.actionCell}>
        <TouchableOpacity
          style={styles.abonarButton}
          onPress={() => navigation.navigate("Abonar", { loan: item })}
        >
          <Text style={styles.abonarButtonText}>Abonar</Text>
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
          <Text style={styles.title}>Préstamos Activos</Text>
          <TouchableOpacity
            style={styles.newLoanButton}
            onPress={() => navigation.navigate("NewLoan")}
          >
            <Text style={styles.newLoanButtonText}>Nuevo Préstamo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar préstamo..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          </View>

          <View style={styles.tableHeader}>
            <Text style={styles.headerCell}>Cliente</Text>
            <Text style={styles.headerCell}>Monto</Text>
            <Text style={styles.headerCell}>Plazo</Text>
            <Text style={styles.headerCell}>Tasa</Text>
            <Text style={styles.headerCell}>Acción</Text>
          </View>

          <FlatList
            data={filteredLoans}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 10 }}
            showsVerticalScrollIndicator={true}
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
  newLoanButton: {
    backgroundColor: "#276D9B",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  newLoanButtonText: {
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
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  searchInput: {
    width: "50%",
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
    justifyContent: "center",
    flex: 1,
  },
  abonarButton: {
    backgroundColor: "#276D9B",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 15,
    alignItems: "center",
  },
  abonarButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default LoanScreen;
