import React from 'react';
import { Button, View, Text } from 'react-native';
import BottomBar from './BottomBar';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Ir a login"
        onPress={() => navigation.goBack()}
      />
      <BottomBar/>
    </View>
  );
}
