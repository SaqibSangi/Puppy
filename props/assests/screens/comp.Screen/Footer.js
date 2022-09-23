import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
const Footer = () => {
  return (
    <View>
      <View style={style.bottomView}>
        <TouchableOpacity>
          <Icon name='watch-later' size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='contacts' size={30} color={'black'}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='sim-card' size={30} color={'black'}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer


const style = StyleSheet.create({
  bottomView: {
    height: 60,
    width: '100%',
    backgroundColor: '#b0c4de',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',


  },











})