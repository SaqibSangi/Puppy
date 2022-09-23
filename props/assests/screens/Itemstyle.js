import { View, Text,FlatList } from 'react-native'
import React from 'react'
import Itemstyle from './assests/screens/Item'

export default function Itemstyle() {
  const data1 = [
{
    title:'Assignment 1',
    Number:1,
    txt:'I am doing React-native',
    img : require('./assests/images/undraw.png')
},


  ]
  return (
    <View style={{flex:1}}>
     <FlatList
     data={data1}
     renderItem={Itemstyle}
     />
    </View>
  )
}