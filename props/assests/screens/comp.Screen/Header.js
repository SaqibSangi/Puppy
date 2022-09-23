import { View, Text, TextInput, StyleSheet, FlatList, useState, TouchableOpacity, onPress } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


const Header = () => {
  // const [show, setShow] = useState(false)
  return (
    <View style={style.ContactIcon}>
          <Text style={style.Contact}>𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐬</Text>
          <TouchableOpacity>
          <Icon style={style.Icon}name='contacts' size={33} color={'black'}/>
        </TouchableOpacity>
      
    </View>
  )
}

export default Header

const style = StyleSheet.create({
  Contact: {
    fontSize: 40,
    marginLeft: 13,
    color: 'black'
  },
  ContactIcon: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  Icon: {
    marginRight: 18,
    marginTop: 5,
    color: 'black',

  },

})