import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function LoansScreen(){
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Loans Screen</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      },
  })