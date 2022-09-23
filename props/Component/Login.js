import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({ navigation }) => {
    const [user, setUser] = useState('')
    const [pass,setPass] = useState('')
    useEffect(() => {
        homescreen();
    }, [])
    const homescreen = async () => {
         const Alpha = await AsyncStorage.getItem('@num');
         if (Alpha) {
            navigation.replace('home')
         }
         }
    const storeData = async () => {
        // console.log(user,pass)
        if (user && pass) {
            try {
                const array =[{
                  name:user,
                  password:pass,
                }]
                // console.log(JSON.stringify(array));
                await AsyncStorage.setItem('@num',JSON.stringify(array));
                Alert.alert('added')
                navigation.navigate('home')
            } catch (error) {
                Alert.alert(error)
            }
            
        } else {
            Alert.alert('NOT Match')
        }
    }
    return (
        <View style={styles.mainview}>
            <View>
                <Image style={styles.img} source={require('../assests/images/Person/6.png')} />
            </View>
            <View style={styles.txtview}>
                <Text style={styles.txt}>LOGIN</Text>
            </View>
            <View style={styles.container}>
                <View>
                    <TextInput value={user} onChangeText={setUser}
                        style={styles.input} placeholder='Email or Mobile Number' />
                </View>
                <View>
                    <TextInput value={pass} onChangeText={setPass}
                        style={styles.input} placeholder='Password' />
                </View>
            </View>
            <View style={styles.loginview}>
                <TouchableOpacity onPress={() => storeData()}>
                    <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    mainview: {
        flex: 1,
        backgroundColor: 'white'
    },
    img: {
        height: 250,
        width: '100%',

    },
    txt: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
    txtview: {
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 7,
        borderRadius: 5
    },
    container: {
        marginTop: 20
    },
    forgot: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold'
    },
    forgotview: {
        alignItems: 'flex-end',
        marginRight: 25
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
        marginTop: 30
    },
    Orview: {
        alignItems: 'center',
        marginVertical: 30
    },
    pic: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        borderRadius: 15,
    },
    picview: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-evenly',
        width: 120,
        marginLeft: 120
    },

})



