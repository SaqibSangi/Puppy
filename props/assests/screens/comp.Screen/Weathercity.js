import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, onPress, Button, Title, Card, Alert, YellowBox } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

const App = () => {
    const [city, setCity] = useState('')
    const [data1, setData1] = useState([]);
    const getWeather = useCallback(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=025c18d3aa50fcc634967ff38753d93e' + '&unit=imperial')
            .then((data) => data.json())
            .then((results) => {
                console.log(results.main)
                setData1(results.main);
            })
    }, [city])
    return (
        <View>
            <View style={style.ContactIcon}>
                <Text style={style.Contact}>𝐖𝐞𝐚𝐭𝐡𝐞𝐫 𝐬𝐜𝐫𝐞𝐞𝐧</Text>
            </View>
            <View>
                <Text style={style.Name}>City Name</Text>
            </View>
            <TextInput style={style.search}
                placeholder='Search Weather City Name'
                onChangeText={setCity} value={city}
            />
            <View style={style.press}>
                <Button
                    title="Save Changes"
                    onPress={() => getWeather()}
                />
            </View>
            <View style={style.weat}>
                <Text style={style.baseText}>
                    Weather
                    <Text style={style.innerText}>Reports</Text>
                </Text>
            </View>
            <View style={style.rep}>
                <Text style={style.temp1}>{data1.temp}</Text>
            </View>

            
        </View>
    )
}

export default App

const style = StyleSheet.create({
    Contact: {
        fontSize: 35,
        marginLeft: 13,
        color: 'black',
        marginTop: 15
    },
    ContactIcon: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'lightblue',
        height: 70
    },
    Name: {
        fontSize: 20,
        marginLeft: 25,
        fontWeight: 'bold',
        marginTop: 5
    },
    search: {
        height: 48,
        width: '90%',
        // backgroundColor:'red',
        marginTop: 13,
        marginLeft: 20,
        borderRadius: 20,
        borderWidth: 1,
    },
    press: {
        height: 30,
        width: '90%',
        backgroundColor: 'red',
        marginTop: 20,
        marginLeft: 20,
    },
    temp1: {
        fontSize: 20,
        height: 60,
        width: '30%',
        // backgroundColor:'red',
        marginLeft: '40%',
        marginTop: 50,
    },
    baseText: {
        fontWeight: 'bold',
        fontSize:30
    },
    innerText: {
        color: 'red'
    },
    weat:{
      alignItems:'center',
      marginTop:50,  
      backgroundColor:'lightblue',
    }




})
