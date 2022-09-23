
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Home = ({navigation}) => {
    const func = async() => {
     await AsyncStorage.removeItem('@num')
     navigation.navigate('Login')
    }
    return (
        <View style={styles.mainview}>
            <View style={styles.loginview}>
                <TouchableOpacity>
                    <Text style={styles.login}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:80}}>
                <TouchableOpacity onPress={() => {func()}}>
                    <Text style={styles.login}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        // backgroundColor: 'red',
    },
    login: {
        backgroundColor: 'black',
        color: 'white',
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        borderRadius: 5
    },
    loginview: {
        marginTop: 300,
    },
    home: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
    }


});