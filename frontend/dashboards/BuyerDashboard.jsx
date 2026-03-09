import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function BuyerDashboard({ route, navigation }) {
  const { username } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {username || 'Buyer'}!</Text>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.navigate('AppContent')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BuyerDashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
