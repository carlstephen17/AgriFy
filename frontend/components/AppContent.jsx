    import { useNavigation } from '@react-navigation/native';
    import React, { useState } from 'react';
    import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Dimensions,
    Modal,
    } from 'react-native';

    const { width } = Dimensions.get('window');

    function AppContent() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
        <Image
            source={require('../assets/LandingPage.png')}
            style={styles.image}
        />

        <View style={styles.bottomSection}>
            <Text style={styles.title}>Welcome to AgriFy!</Text>

            <Text style={styles.description}>
            Connecting farmers and buyers directly to maximize profits and reduce
            waste.
            </Text>

            <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
            >
            <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </View>

        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Role</Text>

                <TouchableOpacity
                style={styles.modalButton}
                onPress={() => navigation.navigate('FarmerSignIn', { role: 'Farmer' })}
                >
                <Text style={styles.modalButtonText}>Farmer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.modalButton}
                onPress={() => navigation.navigate('BuyerSignIn', { role: 'Buyer' })}
                >
                <Text style={styles.modalButtonText}>Buyer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.modalClose}
                onPress={() => setModalVisible(false)}
                >
                <Text style={styles.modalCloseText}>Cancel</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
        </View>
    );
    }

    export default AppContent;

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    image: {
        width: width,
        height: undefined,
        aspectRatio: 3 / 4,
        resizeMode: 'contain',
    },

    bottomSection: {
        flex: 1,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
        marginTop: -20,
        textAlign: 'center',
    },

    description: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 22,
    },

    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
    },

    buttonText: {
        color: '#4CAF50',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },

    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    modalButton: {
        width: '100%',
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        borderRadius: 5,
        marginBottom: 15,
        alignItems: 'center',
    },

    modalButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    modalClose: {
        marginTop: 10,
    },

    modalCloseText: {
        color: '#4CAF50',
        fontSize: 16,
    },
    });
