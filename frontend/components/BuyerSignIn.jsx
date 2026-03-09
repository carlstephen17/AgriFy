import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

function BuyerSignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign In as Buyer</Text>
        </View>
    );
}

export default BuyerSignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    }, 
});     