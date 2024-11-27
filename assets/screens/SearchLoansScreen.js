import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from "react-native";

const SearchLoansScreen = ({ route, navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const loans = [
    { id: "1", cliente: "Juan Pérez", monto: "2000 USD", plazo: "12 meses", tasa: "10%" },
    { id: "2", cliente: "Ana Gómez", monto: "3000 USD", plazo: "24 meses", tasa: "12%" },
    { id: "3", cliente: "Luis Martínez", monto: "1500 USD", plazo: "6 meses", tasa: "8%" },
    { id: "4", cliente: "María López", monto: "2500 USD", plazo: "18 meses", tasa: "11%" },
    { id: "5", cliente: "Carlos Torres", monto: "4000 USD", plazo: "36 meses", tasa: "13%" },
  ];

  // Filtrar préstamos según el término de búsqueda
  const filteredLoans = loans.filter((loan) =>
    loan.cliente.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Función que selecciona un préstamo y regresa a la pantalla de pago
  const handleSelectLoan = (loan) => {
    navigation.navigate("Abonar", { loan }); // Pasa el préstamo seleccionado a la pantalla de pago
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar cliente"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredLoans}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.loanItem}
            onPress={() => handleSelectLoan(item)}
          >
            <Text style={styles.loanText}>{item.cliente}</Text>
            <Text style={styles.loanText}>{item.monto}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noResultsText}>No se encontraron resultados</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#276D9B",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  loanItem: {
    backgroundColor: "#f4f4f4",
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    elevation: 2,
  },
  loanText: {
    fontSize: 16,
    color: "#333",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
  },
});

export default SearchLoansScreen;
