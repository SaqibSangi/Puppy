import { View, Text, TextInput, FlatList, Image, StyleSheet, Modal, TouchableOpacity, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import AsyncStorage from '@react-native-async-storage/async-storage'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

// const contacts = [

//     { name: "Wiki", phone: '3016785209', Image: require('../assests/images/Person/1.jpg') },
//     { name: "Usman", phone: '9865434525', Image: require('../assests/images/Person/2.jpg') },
//     { name: "Umer", phone: '3016785209', Image: require('../assests/images/Person/3.jpg') },
//     { name: "Wan", phone: '9865435725', Image: require('../assests/images/Person/4.jpg') },
//     { name: "War", phone: '3016785209', Image: require('../assests/images/Person/5.jpg') },
//     { name: "Zman", phone: '9865438925', Image: require('../assests/images/Person/6.png') },
//     { name: "Jon", phone: '3016785209', Image: require('../assests/images/Person/1.jpg') },
//     { name: "John", phone: '9865489325', Image: require('../assests/images/Person/2.jpg') },
//     { name: "Sam", phone: '3016785209', Image: require('../assests/images/Person/4.jpg') },
//     { name: "Zee", phone: '9865434525', Image: require('../assests/images/Person/3.jpg') },
//     { name: "Shan", phone: '3016785209', Image: require('../assests/images/Person/6.png') },
//     { name: "Juni", phone: '9865424325', Image: require('../assests/images/Person/5.jpg') },
//     { name: "Abad", phone: '3016785209', Image: require('../assests/images/Person/2.jpg') },
//     { name: "Zuni", phone: '9865431225', Image: require('../assests/images/Person/4.jpg') },
//     { name: "Zman", phone: '9865438925', Image: require('../assests/images/Person/6.png') },
//     { name: "Umer", phone: '3016785209', Image: require('../assests/images/Person/3.jpg') },
//     { name: "Wan", phone: '9865435725', Image: require('../assests/images/Person/4.jpg') },
// ]
const Main = () => {

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [modalVisible, setModalVisible] = useState(false);
    const [contactsList, updateContacts] = useState([])
    const [allContactsData, updateAllContacts] = useState([]);
    const [text, onChangeText] = useState("")

    const Mod = () => {
        return (
            <KeyboardAvoidingView>
                <View style={styles.mod1}>
                    <View style={styles.Names}>
                        <Text style={styles.Redx}>Name</Text>
                        <TextInput placeholder='Enter your Name' style={styles.input1}
                            value={name}
                            onChangeText={setName} />
                    </View>
                    <View style={styles.Names}>
                        <Text style={styles.Redx}>Phone</Text>
                        <TextInput placeholder='Enter your Phone Number' style={styles.input1} keyboardType='number-pad'
                            value={number}
                            onChangeText={setNumber} />
                    </View>
                    {/* {console.log(name,number)} */}
                    <TouchableOpacity onPress={() => { SetData(setName, setNumber) }}>
                        <Text style={styles.Redx1}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text style={styles.Redx2}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }

    const SetData = useCallback(async () => {
        try {
            const newItem = { name: name, phone: number }
            const data = [...contactsList, newItem]
            console.log(data)
            updateContacts(data)
            await AsyncStorage.setItem('@contact', JSON.stringify(data));
            setNumber('')
            setName('')
            alert('item Added to local storage');
        } catch (e) {
            console.log(e)
        }
    }, [name, number,contactsList])
    useEffect(() => {
        getData();
    }, [])

    const getData = useCallback(async () => {
        try {
            const data = await AsyncStorage.getItem('@contact');
            console.log(data);
            if (data) {
                updateContacts(JSON.parse(data));
                updateAllContacts([...JSON.parse(data)]);
                console.log(data);
            } else {
                console.log('Async Storage is null')
            }
        } catch (e) {
            console.log(e)
        }
    }, [])
    
    
    const searchContact = useCallback(value => {
        if (value) {
            const newList = allContactsData.filter(x => x.name.includes(value))
            updateContacts(newList)
        } else {
            updateContacts(allContactsData)
        }
    }, [allContactsData])
    const removeValue = async(saqib) => {
        try{
            const i = contactsList.findIndex(x=> x.name==saqib)
            const data = contactsList.splice(i,1);
            const g = contactsList.filter(x=> x.name != data.saqib)
            updateContacts(g);
            await AsyncStorage.setItem('@contact',JSON.stringify(g));
            getData();
            Alert.alert('Contact Deleted');
        } catch (e) {
            console.log(e);
        }
    };

    
    return (
        <View>

            <View>
                <Header />
                <View style={styles.Serview}>
                <TextInput style={{
                    padding: 20, height: 55, width: '90%', marginTop: 18,
                    marginLeft: 18, borderRadius: 50, borderWidth: 1, borderColor: 'black'
                }}
                    onChangeText={(val) => {
                        onChangeText(val)
                        searchContact(val)
                    }}
                    value={text}
                    placeholder="Search Contacts"/>
                 </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(false);
                    }}
                >
                    {Mod()}
                </Modal>
                <View>
                    <FlatList style={{ height: 590, position: 'relative', }} keyExtractor={({ item, index }) =>
                        JSON.stringify(index)}
                        data={contactsList} renderItem={({ item,index }) =>
                            <Contact key={index} data={item} m={removeValue}/>} />
                    <Icon onPress={() => { setModalVisible(true) }} style={styles.Icon} name='add-circle-outline' size={50} />
                </View>

                <Footer />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    Icon: {
        color: 'black',
        position: 'absolute',
        right: 50,
        bottom: 50,

    },
    mod1: {
        height: 597,
        width: '100%',
        marginTop: 130,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    Redx: {
        marginLeft: 30,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        marginTop: 40
    },
    Redx1: {
        marginLeft: 30,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 29,   
        marginTop: 40,
        width:53,
        height:40,
        backgroundColor:'#b0c4de',
        borderRadius:10
    },
    Redx2: {
        marginLeft: 30,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 29,
        marginTop: 40,
        height:40,
        width:82,
        borderRadius:10,
        backgroundColor:'#b0c4de',
    },
    input1: {
        backgroundColor: 'white',
        marginHorizontal: 30,
        borderRadius: 5,
        elevation: 10,
        marginVertical: 5,
        height: 45,
    },
    Serview:{
        backgroundColor:'white',
        height:90
    }
})

export default Main