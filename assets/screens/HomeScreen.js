import React from 'react';
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BottomBar from './BottomBar';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.bgcolor}>Home Screen</Text>
        <Button
          title="Ir a login"
          onPress={() => navigation.goBack()}
        />
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

    bgcolor:{
      backgroundColor: '#ff2d00',
    }
})
