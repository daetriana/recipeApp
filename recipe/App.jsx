import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardDisplay from "./src/components/cardDisplay"
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my Vegan Recipe Book!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
