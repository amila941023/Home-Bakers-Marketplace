import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground 
            source={require('../../assets/images/welcome.jpeg')} // Add a cake background image in assets
            style={styles.background}>
            
            <View style={styles.overlay}>
                <Text style={styles.title}>Welcome to Home Bakers' Marketplace!</Text>
                
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => {}}>
                    <Text style={styles.buttonText}>I’m a Baker 🍰</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={[styles.button, styles.seekerButton]} 
                    onPress={() => {}}>
                    <Text style={styles.buttonText}>I’m a Seeker 🎂</Text>
                </TouchableOpacity>
            </View>

            <StatusBar style="light" />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#ffcc00',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginVertical: 10,
    },
    seekerButton: {
        backgroundColor: '#ff6600',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default HomeScreen;
