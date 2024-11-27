import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PayScreen = ({ route }) => {
    const navigation = useNavigation();

    // Recibe el préstamo desde la navegación, o utiliza valores predeterminados si no se pasa
    const loan = route?.params?.loan || { cliente: "N/A", monto: "0 USD", plazo: "N/A", tasa: "N/A" };

    const [amount, setAmount] = useState(""); // Estado para el monto a pagar
    const [paymentType, setPaymentType] = useState(null); // Estado para el tipo de pago seleccionado

    const handlePayment = () => {
        if (!amount || !paymentType) {
            alert("Por favor, complete todos los campos.");
            return;
        }
        alert(`Has realizado un ${paymentType} por ${amount} para el préstamo de ${loan.cliente}.`);
        navigation.goBack(); // Regresa a la pantalla anterior
    };

    const openSearchScreen = () => {
        navigation.navigate("SearchLoansScreen"); // Abre la pantalla de búsqueda
    };

    return (
        <ImageBackground
            source={require("../img/background.jpeg")}
            style={styles.background}
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.headerBar}>
                    <Text style={styles.title}>Gestión de Préstamo</Text>
                    <TouchableOpacity onPress={openSearchScreen}>
                        <Text style={styles.searchButton}>🔍 Buscar Préstamo</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Cliente:</Text>
                    <Text style={styles.value}>{loan.cliente}</Text>

                    <Text style={styles.label}>Monto del préstamo:</Text>
                    <Text style={styles.value}>{loan.monto}</Text>

                    <Text style={styles.label}>Plazo:</Text>
                    <Text style={styles.value}>{loan.plazo}</Text>

                    <Text style={styles.label}>Tasa de interés:</Text>
                    <Text style={styles.value}>{loan.tasa}</Text>

                    <Text style={styles.label}>Monto a pagar/abonar:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese el monto"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />

                    <Text style={styles.label}>Seleccione una opción:</Text>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity
                            style={[
                                styles.optionButton,
                                paymentType === "Pago" && styles.selectedOptionButton,
                            ]}
                            onPress={() => setPaymentType("Pago")}
                        >
                            <Text style={styles.optionText}>Pagar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.optionButton,
                                paymentType === "Abono" && styles.selectedOptionButton,
                            ]}
                            onPress={() => setPaymentType("Abono")}
                        >
                            <Text style={styles.optionText}>Abonar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.optionButton,
                                paymentType === "Saldo" && styles.selectedOptionButton,
                            ]}
                            onPress={() => setPaymentType("Saldo")}
                        >
                            <Text style={styles.optionText}>Saldar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={handlePayment}>
                        <Text style={styles.submitButtonText}>Confirmar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
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
        padding: 20,
    },
    headerBar: {
        backgroundColor: "#B1D4E466",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#00000066",
    },
    searchButton: {
        fontSize: 16,
        color: "#276D9B",
        fontWeight: "bold",
    },
    formContainer: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#276D9B",
    },
    value: {
        fontSize: 16,
        marginBottom: 10,
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "#276D9B",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    optionButton: {
        flex: 1,
        backgroundColor: "#e0e0e0",
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        alignItems: "center",
    },
    selectedOptionButton: {
        backgroundColor: "#276D9B",
    },
    optionText: {
        color: "#fff",
        fontWeight: "bold",
    },
    submitButton: {
        backgroundColor: "#276D9B",
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: "center",
    },
    submitButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default PayScreen;
