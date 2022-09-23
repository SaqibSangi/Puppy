import { View, Text, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
// import SwipeableView from 'react-native-swipeable-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Contact = ({ data,m }) => {
    // const { name, phone } = data
    let name = data?.name
    let sh = data.Image
    let phone = data?.phone
    // let Image = data?.Image
    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert",
      "Are you sure you want to delete this item",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => m(name) }
      ]
    );
    return (
        <View style={styles.contactContainer}>
            <View style={styles.contactImage}>
                {sh ?
                    <Image source={m} />

                    :
                    <Text style={styles.newname}>{name.substring(0,1)}</Text>
                }
            </View>
            <View style={styles.contact1}>
                <Text style={styles.txt}>{name}</Text>
                <Text>{phone}</Text>   
            </View>
            <View style={styles.del}>
            <TouchableOpacity onPress={()=>createTwoButtonAlert()}>
            <Icon name='delete-restore' size={35} color={'black'}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contactContainer:
    {
        height: 90,
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 13,
        flexDirection: "row",
        borderBottomWidth: 0.5,
        justifyContent:'space-between'
        
    },
   
    contact1:{
     height:50,
     width:'70%',
    //  backgroundColor:'red',
     marginLeft:5,
     padding:13,
    },
    del:{
        // backgroundColor:'black',
        borderRadius:80,
        justifyContent:'center',
        height:45,
        width:52,
        padding:6,
    },
    contactImage:{
        height:60,
        width:60,
        backgroundColor:'#b0c4de',
        borderRadius:150/2,
        alignItems:'center',
        justifyContent:'center',
    },
    newname:{
        fontSize:25,
        fontWeight:'bold'
    },
    txt:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default Contact
