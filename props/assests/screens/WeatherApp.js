import { View, Text, ImageBackground, ScrollView, FlatList, TextInput, TouchableOpacity, Button,Image,Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'

export default function WeatherApp() {
    const date = new Date().toLocaleString();
    const [city, setCity] = useState(0)
    const [entry, setEntries] = useState([]);
    const [current,setCurrent] =useState([])
    const getWeather = useCallback(() => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=Lahore&units=metric&appid=1e8beb5383a235b0ea1d4446586752f8')
            .then(data => data.json())
            .then(data => {
                console.log(data.list)
                setEntries(data.list);
                setCurrent(
                    {
                        temp:data.list[0].main.temp
                    }
                )
                
            }) 
            .catch((error => alert('Wrong City')))
    }, [city]);
  
  

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 ,}}>
                <ImageBackground source={require('../images/w.png')} style={{ height: 985, width: '100%', }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TextInput
                            placeholder='Search Weather City Name' style={{
                                height: 35,
                                width: '70%',
                                backgroundColor: 'white',
                                marginTop: 8,
                                marginLeft: 20,
                                borderRadius: 20,
                                borderWidth: 1,
                            }}
                        onChangeText={setCity} value={city}
                        />
                        <TouchableOpacity>
                            <Icon2 name='search'
                                onPress={() => {
                                    getWeather()
                                }}
                                color={'white'} size={30}
                                style={{ marginLeft: 12 }} />
                                

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name='dots-three-vertical'
                                color={'white'} size={20}
                                style={{ marginRight: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'white', fontSize: 20, padding: 8, fontWeight: '600', left: 20 }}>
                        {city}
                    </Text>
                           
                    <ScrollView style={{ marginVertical: 200, }}>

                        <Text style={{ fontSize: 90, left: 20, color: 'white', fontWeight: '300' }}>
                            {current.temp}
                        </Text>
                        <Text style={{ fontSize: 20, marginVertical: 8, color:'white',marginLeft:20 }}>{date}</Text>
                        <Text style={{ fontSize: 25, left: 25, color: 'white' }}>
                            Sunny
                        </Text>
                        <Text style={{ fontSize: 20, left: 25, marginTop: 5, color: 'white' }}>
                            26°/37° C
                        </Text>
                        <FlatList
                            data={entry}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        padding: 12, marginTop: 20, alignItems: 'center',
                                        marginLeft: 4, backgroundColor: "white", borderRadius: 50
                                    }}>
                                        <Icon1 name="sun" size={25} />
                                        <Text style={{ fontSize: 20, marginVertical: 5 }}>{item.main.temp}</Text>
                                    </View>
                                );
                            }}
                            horizontal={true}
                        />
                        <FlatList data={entry}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ 
                                        padding: 20, marginLeft: 22, borderTopWidth: 1,
                                        marginTop: 10, backgroundColor: 'white', borderRadius: 50
                                    }}>
                                        <Text style={{ fontSize: 20, marginVertical: 8, }}>{item.main.humidity}</Text>
                                        <Text style={{ fontSize: 15, marginVertical: 5 }}>{item.main.feels_like}</Text>
                                        <Text style={{ fontSize: 15, marginVertical: 5 }}>{item.main.pressure}</Text>
                                    </View>
                                )
                            }}
                            horizontal={true}
                        />
                        <FlatList
                            data={entry}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 25,
                                        backgroundColor: 'white', width: '90%', marginLeft: 20, borderRadius: 20
                                    }}>
                                        <Text style={{ fontSize: 20, marginVertical: 8 }}>{date}</Text>
                                        <Icon1 name={item.icon} size={25} style={{ marginTop: 5 }} />
                                        
                                    </View>
                                )
                            }}

                        />



                    </ScrollView>

                </ImageBackground>

            </View>
        </View>
    )
}

