import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function ClientScreen(){
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Client Screen</Text>
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