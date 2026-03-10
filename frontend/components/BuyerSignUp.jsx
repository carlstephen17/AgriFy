import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform } from 'react-native';

function BuyerSignUp({ route, navigation }) {
  const { role } = route.params || {};

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('BuyerLogIn', { username, email, phone });
  };

  const handleAlreadyAccount = () => {
    navigation.navigate('BuyerLogIn', { role });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up as {role || 'Farmer'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity onPress={handleAlreadyAccount} activeOpacity={0.7}>
        <Text style={styles.alreadyAccountText}>Already Have an Account?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.navigate('AppContent')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BuyerSignUp;;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: Platform.OS === 'ios' ? 15 : 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2, 
  },
  alreadyAccountText: {
    textAlign: 'right',
    color: '#4CAF50',
    fontWeight: '600',
    marginBottom: 25,
    fontSize: 14,
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  backButton: {
    width: '100%',
    backgroundColor: '#aaa',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});